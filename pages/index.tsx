import { Banner } from "@/components/Banner";
import { ButtonWhats } from "@/components/ButtonWhats";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import { Servicos } from "@/components/Servicos";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <ButtonWhats />
      <Banner></Banner>
      <Sobre></Sobre>
      <Servicos></Servicos>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </main>
  );
}
