import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center font-aktiv ">
        <div className="w-full h-[560px] bg-[#03313B] ">
          <Navbar />
          <MainSection/>
        </div>
      </div>
    </>
  )
}