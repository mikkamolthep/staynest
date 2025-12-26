import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex flex-col justify-center items-center bg-red-300">
        <h1>404 - Page Not Found 🥹</h1>
      </div>
    ),
    children:[
      { path: "/", element: <Home /> },
      // { path: "about", element: <About /> },
      // { path: "properties", element: <Properties /> },
      // { path: "feed", element: <Feed /> },
      // { path: "news", element: <News /> },
      // { path: "getstart", element: <GetStart /> },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
