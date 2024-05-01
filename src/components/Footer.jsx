import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-gray-500 text-sm bg-[#f2f2f2]">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row items-center 
      justify-between px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-2">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Advertising</li>
          <li className="cursor-pointer hover:underline">Business</li>
          <li className="cursor-pointer hover:underline">How Search Works</li>
        </ul>

        <ul className="flex items-center space-x-2">
          <li className="cursor-pointer hover:underline">Privacy</li>
          <li className="cursor-pointer hover:underline">Terms</li>
          <li className="cursor-pointer hover:underline">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
