
import { SearchParams } from "@/app/search/page";
import { Result } from "@/typings";

export async function fetchResults(searchParams: SearchParams) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const url = new URL(searchParams.url);
  Object.keys(searchParams).forEach((key) => {
    if (key === "url" || key === "location") return;

    const value = searchParams[key as keyof SearchParams];

    if (typeof value === "string") {
      url.searchParams.append(key, value);
    }
  });

  console.log("scraping url >>>", url.href);

  const body = {
    source: "universal",
    url: url.href,
    parse: true,
    render: "html",
    parsing_instructions: {
      listings: {
        _fns: [
          {
            _fn: "xpath",
            _args: ["//div[@data-testid='property-card-container']"],
          },
        ],
        _items: {
          title: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [".//div[@data-testid='title']/text()"],
              },
            ],
          },
          description: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [
                  ".//h4[contains(@class, 'b290e5dfa6 cf1a0708d9')]/text()",
                ],
              },
            ],
          },
          booking_metadata: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [
                ".//div[contains(@class, 'ff3362afcb d45c0d8067')]/div[contains(@class, '')]/text()"

                ],
              },
            ],
          },
          link: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [".//a[contains(@class, 'eba3d3a8df')]/@href"],
              },
            ],
          },
          price: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [
                  `.//span[contains(@class, 'fa4a3a8221 b22052b420 f53c51ec80')]/text()`,
                ],
              },
            ],
          },
          url: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [".//img/@src"],
              },
            ],
          },
          rating_word: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [
                  ".//div[@class='f13857cc8c e6314e676b a287ba9834']/text()",
                ],
              },
            ],
          },
          rating: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [".//div[@class='f13857cc8c e008572b71']/text()"],
              },
            ],
          },
          rating_count: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [
                  ".//div[@class='b290e5dfa6 a5cc9f664c c4b07b6aa8']/text()",
                ],
              },
            ],
          },
        },
      },
      total_listings: {
        _fns: [
          {
            _fn: "xpath_one",
            _args: [".//h1/text()"],
          },
        ],
      },
    },
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    body: JSON.stringify(body),
    next: {
      revalidate: 60 * 60, // cache for 1 hour
    },
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) return;
      const result: Result = data.results[0];

      return result;
    })
    .catch((err) => console.log(err));

  return response;
}
