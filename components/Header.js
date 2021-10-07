import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Flix from "./flix.png";

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center m-2 p-5 h-auto ">
      <div className="flex space-x-3 flex-grow items-center justify-evenly max-w-2xl p-4 border-4 border border-purple-50 bg-red-700 border-black ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image className="object-contain " src={Flix} width={300} height={100} />
    </header>
  );
}

export default Header;
