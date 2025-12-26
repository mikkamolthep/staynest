// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#8fb6b3] py-6">
      <div>
        <Navbar />
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}
