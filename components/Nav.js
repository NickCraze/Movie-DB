import { useRouter } from "next/router";
import requests from "../utils/requests";
useRouter

function Nav() {

const router = useRouter();

  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 
            sm:space-x-20 overflow-x-scroll scrollbar-hide h-10"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick = {()=> router.push(`/?genre=${key}`)     }
            className="last:pr-24 transition duration-100 transform
                     hover:scale-125 cursor-pointer active:text-red-500 h-auto "
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#860505] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
