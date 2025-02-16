import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jhon!</h2>
        <p>Sábado, 15 de fevereiro</p>
        <p>Seja bem vindo ao nosso torneio Green Life</p>
        <div className="relative w-full h-[300px] mt-5">
          <Image
            src="/banner.jpg"
            alt="Banner do torneio"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
