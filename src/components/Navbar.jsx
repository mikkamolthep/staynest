import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mx-7 bg-[#B7D6E1]">
      <div className="flex justify-between items-center gap-2 px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src="dream house logo.png" alt="logo" width={75} />
          <span className="text-white text-xl">Dream House</span>
        </Link>
        <ul 
        className="flex items-center bg-[#85BECF] text-white rounded-full 
        py-2 px-5 "
        >
          <li className="hover:bg-[#5198AD] rounded-full px-3 py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-[#5198AD] rounded-full px-3 py-1">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-[#5198AD] rounded-full px-3 py-1">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="hover:bg-[#5198AD] rounded-full px-3 py-1">
            <Link to="/feed">Feed</Link>
          </li>
          <li className="hover:bg-[#5198AD] rounded-full px-3 py-1">
            <Link to="/news">News</Link>
          </li>
        </ul>

        <Link to="/get start" className="bg-white rounded-full py-1 px-3">Get Started</Link>
      </div>
    </nav>
  );
}
