import Landing from "@/components/Andres-qlq";
import Header from "@/components/Header";
import Seguidores from "@/components/Seguidores";
import Image from "next/image";
import Merch from "@/components/Merch"
import Pepsi from "@/components/Pepsi"

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Seguidores />
      <Merch />
      <Pepsi />
    </>
    
  );
}
