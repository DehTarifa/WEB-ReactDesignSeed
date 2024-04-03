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
  title: "Governança",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-20"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="ligth">Conheça tudo sobre a Teracorporation</Caption>
            <Headline alignText="lgStart" heading="h1">Nossa Governança</Headline>
            <Paragraph alignText="lgStart">A Teracorporation atua há mais de 4 anos no mercado de soluções TI e conectividade. Com rede independente e robusta, atende empresas em todo território nacional. Desenvolvimento profissional e qualidade são preocupações constantes. Cultura empresarial forte é essencial.</Paragraph>
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
            <Headline alignText="lgStart">A governança é um aspecto fundamental para o sucesso de qualquer empresa.</Headline>
            <Paragraph alignText="lgStart">Para empresas de soluções tecnológicas, isso se torna ainda mais relevante, dada a natureza rápida e dinâmica do mercado em que atuam.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>
      
      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
            <Paragraph alignText="lgStart">Na Teracorporation, acreditamos que a governança deve ser uma prática constante e transparente. Isso significa que a gestão deve ser baseada em processos bem definidos, com regras claras e objetivas, que são comunicadas de forma eficiente a todos os membros da equipe. Além disso, nossa empresa tem um forte compromisso com a ética e a integridade, o que se reflete em nossas políticas de transparência, responsabilidade e conformidade.</Paragraph>
            <Paragraph alignText="lgStart">Outro aspecto importante da nossa governança é a busca constante pela excelência. Nós nos esforçamos para atingir os mais altos padrões de qualidade em nossos produtos e serviços, e isso só é possível graças ao nosso compromisso com a inovação e a melhoria contínua. Isso significa que nossos processos são constantemente revisados e atualizados para garantir que estamos sempre oferecendo o melhor para nossos clientes.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Paragraph alignText="lgStart">Outro aspecto importante da nossa governança é a busca constante pela excelência. Nós nos esforçamos para atingir os mais altos padrões de qualidade em nossos produtos e serviços, e isso só é possível graças ao nosso compromisso com a inovação e a melhoria contínua. Isso significa que nossos processos são constantemente revisados e atualizados para garantir que estamos sempre oferecendo o melhor para nossos clientes.</Paragraph>
            <Paragraph alignText="lgStart">A Teracorporation adota um estilo de governança transparente, ético, orientado para a excelência e colaborativo.</Paragraph>
            <Paragraph alignText="lgStart">Esses são os valores que guiam nossa empresa e que nos permitem oferecer as melhores soluções tecnológicas para nossos clientes.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}