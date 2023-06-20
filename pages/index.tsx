import { Banner } from "@/components/Banner";
import { ButtonWhats } from "@/components/ButtonWhats";
import { Header } from "@/components/Header";
import { Servicos } from "@/components/Servicos";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <ButtonWhats />
      <Banner></Banner>
      <Servicos></Servicos>
    </main>
  );
}
