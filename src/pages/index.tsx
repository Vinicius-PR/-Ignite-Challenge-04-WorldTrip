import Banner from "../components/Banner";
import LetsGo from "../components/LetsGo";
import Slider from "../components/Slider/Slider";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Banner/>
      <TravelTypes/>
      <LetsGo/>
      <Slider/>
    </>
  )
}
