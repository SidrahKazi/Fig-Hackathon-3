import Hero from "@/components/Hero";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import Body from "@/components/Body";
import ImageCards from "@/components/ImageCards";
import Featured from "@/components/Featured";
import GearUp from "@/components/GearUp";
import Cards from "@/components/Cards";
import Cards2 from "@/components/Cards2";
import Essentials from "@/components/Essentials";
import List from "@/components/List";
export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <BottomHeader/>
      <Hero/>
      <Body/>
      <ImageCards/>
      <Featured/>
      <GearUp/>
      <Cards/>
      <Cards2/>
      <Essentials/>
      <List/>
      <Footer/>
    </div>
  );
}
