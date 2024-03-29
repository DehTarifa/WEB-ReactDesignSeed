import { Container } from "@/components/containers/Container";
import { ContentGrid, ContentImage, ContentText } from "@/components/containers/Contents";
import { Section } from "@/components/containers/Section";
import { WrapperButton, WrapperCommunicatory } from "@/components/containers/Wrapper";
import { Button } from "@/components/interface/Button";
import { Communicatory } from "@/components/interface/Communicatory";
import { Caption } from "@/components/typography/Caption";
import { Headline } from "@/components/typography/Headline";
import { Paragraph } from "@/components/typography/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diversidade",
  description: "Generated by create next app",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-20"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="solid">Nossos Diferenciais</Caption>
            <Headline alignText="lgStart" heading="h1">Diversidade</Headline>
            <Paragraph alignText="lgStart">A Teracorporation valoriza e promove a diversidade para alcançar sucesso e inovação em tecnologia. Eles criam um ambiente inclusivo valorizando a diversidade de gênero, raça, etnia, orientação sexual, religião, idade e habilidades. Adotam políticas e programas de treinamento para garantir uma força de trabalho diversa e criam grupos de afinidade para promover o engajamento dos colaboradores. A empresa se orgulha de sua cultura inclusiva e compromisso com a justiça social.</Paragraph>
            
            <WrapperButton>
              <Button style="weak">Saiba mais</Button>
              <Button style="outline">Fale com um vendedor</Button>
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
            <Caption style="solid">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Tecnologia para todos</Headline>
            <Paragraph alignText="lgStart">A Teracorporation é uma empresa que valoriza e promove a diversidade em todas as suas formas. Sabemos que a diversidade é uma força fundamental para o sucesso e a inovação em uma empresa de soluções tecnológicas.</Paragraph>
            <Paragraph alignText="lgStart">É por isso que estamos comprometidos em criar um ambiente de trabalho inclusivo, acolhedor e diverso para todos os nossos colaboradores. Acreditamos que a diversidade é a chave para a criatividade e a inovação, pois permite uma ampla gama de perspectivas e ideias que podem ser aplicadas no desenvolvimento de soluções tecnológicas.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
          <Paragraph alignText="lgStart" className='col-span-6'>Além disso, entendemos que a diversidade é uma questão de justiça social e que, como empresa, temos uma responsabilidade em contribuir para a criação de uma sociedade mais justa e inclusiva.</Paragraph>
            <Paragraph alignText="lgStart" className='col-span-6'>Por isso, na Teracorporation, valorizamos e respeitamos todas as formas de diversidade, incluindo a diversidade de gênero, raça, etnia, orientação sexual, religião, idade e habilidades físicas e mentais. Estamos empenhados em garantir que todos os nossos colaboradores se sintam respeitados, valorizados e incluídos em nossa empresa.</Paragraph>
            <Paragraph alignText="lgStart" className='col-span-6'>Para promover a diversidade, adotamos uma série de práticas, incluindo programas de treinamento e sensibilização, políticas de recrutamento e seleção que visam garantir uma força de trabalho diversa e inclusiva, e a criação de grupos de afinidade para promover a conexão e o engajamento entre nossos colaboradores.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Caption style="solid">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Juntos, estamos construindo uma empresa mais forte, inovadora e justa para todos.</Headline>
            <Paragraph alignText="lgStart">Estamos orgulhosos de ser uma empresa que valoriza a diversidade em todas as suas formas e que está comprometida em criar um ambiente de trabalho inclusivo e acolhedor para todos os nossos colaboradores.</Paragraph>
          
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}