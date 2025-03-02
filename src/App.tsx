import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto p-4">
        <Navbar />
        <Outlet/>
      </div>
    </>
  );
}

export default App;
