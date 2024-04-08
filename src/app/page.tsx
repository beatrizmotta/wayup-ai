import Image from "next/image";
import wayUpLogoWithImage from "public/logos/wayup-ai-logo-w-image.svg"
import { Button } from "./button";
import Input from "./input";
import Options from "./options";

export default function Home() {
  return (
    <main className="bg-slate-300">
        <div className="flex flex-col items-center text-center">
          <Image 
          src={wayUpLogoWithImage}
          alt="Logotipo da WayUp"
          />
          <h1
            className="text-4xl font-medium"
          >
            Gerador de ideias inovadoras
          </h1>
          <h2 className="text-grey-400">
            Gere ideias inovadoras e assertivas usando inteligência artificial
          </h2>

          <Options />

          <div className="flex gap-2">
            <Input placeholder="Qual o problema/dor?" />
            <Button className="text-lg px-7">
              Gerar
            </Button>
          </div>
        </div>
    </main>
  );
}
