import { trending_data } from "@/data/trending";
import SearchForm from "@/components/SearchForm";


export default function Home() {
  return (
    <main className="bg-[#013B94]">

        <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="-mb-14 m-4 mt-0 px-2 lg:px-4">
        <SearchForm/>
      </section>

      <section className="max-w-7xl mx-auto p-6 bg-white rounded-t-lg mt-10">
        <div className="pt-5">
          <h3 className="text-2xl font-bold">
            Most Trending Destination
          </h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 overflow-x-scroll py-5">
          {trending_data.map((item)=>(
            <div key={item.id}  className="space-y-1 cursor-pointer shrink-0">
              <img className="w-80 h-72 pb-2 object-cover" src={item.src} alt="destination-img" />
              <p className="font-bold">{item.title}</p>
              <p className="font-semibold">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
