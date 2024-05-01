import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomeHeader />
    <div className="flex items-center flex-col mt-24">
      <Image src='https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg'
      alt="Google logo" width={300} height={100}  />

      <HomeSearch />
    </div>
    </>
  );
}
