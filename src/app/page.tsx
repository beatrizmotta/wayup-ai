import Image from "next/image";
import wayUpLogoWithImage from "public/logos/wayup-ai-logo-w-image.svg"
import Options from "./options";
import DescriptionInput from "./descriptioninput";
import Card, { CardContent } from "./card";
import puzzle from "public/icons/puzzle-pieces.svg";
import idea from "public/icons/idea.svg";
import point from "public/icons/point.svg";
import { CardIcon, CardBody, CardHeader } from "./card";


export default function Home() {

  const cards: Array<{ icon: string, icon_alt: string, title: string, desc: string }> = [
    {
      icon: point,
      icon_alt: "Um ponto ligado a outro",
      title: "Crie soluções inovadoras",
      desc: "A Wayup cria ideias inovadoras para você que quer criar um negócio"
    },
    {
      icon: puzzle,
      icon_alt: "Duas peças de quebra cabeça encaixadas",
      title: "Resolva os problemas",
      desc: "Solucione problemas com ideias inovadoras geradas pela nossa inteligêcia artificial"
    },
    {
      icon: idea,
      icon_alt: "Um desenho de uma lâmpada com um marca de 'confere' dentro",
      title: "Inove o seu negócio",
      desc: "Gere inovação para a sua empresa, solucionando os problemas reais dos seus clientes e alcançando oportunidades do seu negócio"
    },
  ]


  return (
    <main className="bg-slate-300">
      <div className="flex flex-col items-center mt-20 text-center gap-3">
        <Image
          className="mb-8"
          src={wayUpLogoWithImage}
          alt="Logotipo da WayUp"
        />
        <div className="flex flex-col gap-2 mb-7">
          <h1
            className="text-4xl font-medium"
          >
            Gerador de ideias inovadoras
          </h1>
          <h2 className="text-grey-400">
            Gere ideias inovadoras e assertivas usando inteligência artificial
          </h2>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Options />
          <DescriptionInput />
        </div>


        <div className="md:flex md:items-center">
          {
            cards.map((card, index) => {
              return (
                <Card key={index}>
                  <CardContent>
                    <CardIcon icon={card.icon} alt={card.icon_alt} />
                    <CardHeader>
                      {card.title}
                    </CardHeader>
                  </CardContent>
                  <CardBody>
                    {card.desc}
                  </CardBody>
                </Card>
              )
            })
          }
        </div>

      </div>
    </main>
  );
}
