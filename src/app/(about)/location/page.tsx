import { Container } from "@/components/containers/Container";
import { ContentImage, ContentText } from "@/components/containers/Contents";
import { Section } from "@/components/containers/Section";
import { WrapperButton } from "@/components/containers/Wrapper";
import { Button } from "@/components/interface/Button";
import { Caption } from "@/components/typography/Caption";
import { Headline } from "@/components/typography/Headline";
import { Paragraph } from "@/components/typography/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Localização",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-20"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="ligth">Conheça tudo sobre a Teracorporation</Caption>
            <Headline alignText="lgStart" heading="h1">Onde estamos</Headline>
            <Paragraph alignText="lgStart">A Teracorporation atua há mais de 4 anos no mercado de soluções TI e conectividade. Com rede independente e robusta, atende empresas em todo território nacional. Desenvolvimento profissional e qualidade são preocupações constantes. Cultura empresarial forte é essencial.</Paragraph>
            
            <WrapperButton>
              <Button redirect="" style="emphasis">Saiba mais</Button>
              <Button redirect="" style="ligth">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

          <ContentImage background="lightTheme1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Sede Mogi das Cruzes</Headline>
            <Paragraph alignText="lgStart">A Teracorporation é uma empresa de soluções tecnológicas comprometida em fornecer serviços de alta qualidade para seus clientes em todo o Brasil. Nossa sede em Mogi das Cruzes, localizada na Rua Carmela Dutra 228, é um importante centro de operações para a empresa.</Paragraph>
            <Paragraph alignText="lgStart">Nessa sede, contamos com uma equipe dedicada e altamente qualificada em diversas áreas, incluindo marketing, comercial, administrativo, controladoria e NOC (Networking Operations Center).</Paragraph>
            <Paragraph alignText="lgStart">Nossa sede em Mogi das Cruzes é um local estratégico para a empresa, permitindo-nos estar próximos a importantes clientes e parceiros de negócios na região.</Paragraph>
            <Paragraph alignText="lgStart">A Teracorporation está sempre buscando maneiras de aprimorar e expandir nossos serviços para oferecer soluções ainda melhores para nossos clientes. E a nossa sede em Mogi das Cruzes é um importante centro de operações que nos ajuda a alcançar esse objetivo.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Unidade Tatuapé</Headline>
            <Paragraph alignText="lgStart">A segunda unidade da empresa está localizada no bairro Tatuapé – SP. Essa unidade da Teracorporation foi instalada em um local estratégico para negócios, permitindo fácil acesso para nossos clientes e colaboradores. Além disso, essa região é atendida por parte do nosso cabeamento subterrâneo, garantindo maior estabilidade e confiabilidade em nossos serviços.</Paragraph>
            
            <WrapperButton>
              <Button redirect="" style="emphasis">Saiba mais</Button>
              <Button redirect="" style="ligth">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

          <ContentImage background="lightTheme1" className="">
            Content Img
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}