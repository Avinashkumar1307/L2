import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";
import cloud from './assets/cloud.svg';
export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${cloud})` }} className="bg-[#03313B] w-[2400px] h-[900px] flex justify-center items-center font-aktiv -z-10 ">
        <div className="w-[2400px] h-[900px]   ">
          <Navbar />
          <MainSection/>
        </div>
      </div>
    </>
  )
}