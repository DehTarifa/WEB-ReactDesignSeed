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
  title: "Código de conduta",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-28"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="ligth">Conheça tudo sobre a Teracorporation</Caption>
            <Headline alignText="lgStart" heading="h1">Código Conduta</Headline>
            <Paragraph alignText="lgStart">Na Teracorporation, acreditamos que a ética e a integridade são fundamentais para o nosso sucesso e para a confiança que nossos clientes, funcionários e parceiros depositam em nós. Por isso, desenvolvemos este Código de Conduta para orientar nossos funcionários e colaboradores sobre as nossas expectativas em relação a comportamentos éticos e profissionais.</Paragraph>
            
            <WrapperButton>
              <Button redirect="#" style="emphasis">Saiba mais</Button>
              <Button redirect="#" style="ligth">Fale com um vendedor</Button>
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
            <Headline alignText="lgStart">Cumprimento das leis e regulamentações</Headline>
            <Paragraph alignText="lgStart">Nós nos comprometemos a cumprir todas as leis e regulamentações aplicáveis, tanto locais quanto internacionais. Não toleramos qualquer tipo de atividade ilegal ou fraudulenta e trabalhamos para garantir a conformidade com os mais altos padrões de ética e transparência.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>
      
      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Respeito às pessoas e aos direitos humanos</Headline>
            <Paragraph alignText="lgStart">Na Teracorporation, valorizamos a diversidade e o respeito pelas pessoas. Não toleramos nenhum tipo de discriminação, assédio ou intimidação, e nos esforçamos para criar um ambiente de trabalho inclusivo e acolhedor. Também respeitamos os direitos humanos e trabalhamos para garantir que nossas operações e atividades não contribuam para violações desses direitos.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Integridade nas relações comerciais</Headline>
            <Paragraph alignText="lgStart">Valorizamos relacionamentos comerciais baseados na integridade e transparência. Esperamos que nossos funcionários e colaboradores ajam com honestidade e respeito em todas as interações com clientes, fornecedores e parceiros. Não toleramos suborno, corrupção ou qualquer outra forma de atividade ilegal ou antiética em nossas relações comerciais.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Proteção de informações confidenciais</Headline>
            <Paragraph alignText="lgStart">Nosso sucesso depende da proteção adequada de informações confidenciais, incluindo informações de nossos clientes, funcionários e parceiros. Esperamos que nossos funcionários e colaboradores protejam essas informações e as utilizem apenas para fins comerciais legítimos. Também nos comprometemos a cumprir todas as leis e regulamentações aplicáveis à proteção de dados pessoais.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Caption style="ligth">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart">Responsabilidade social e ambiental</Headline>
            <Paragraph alignText="lgStart">Na Teracorporation, nos preocupamos com nosso impacto social e ambiental. Trabalhamos para minimizar os impactos negativos de nossas operações e promover práticas sustentáveis. Também nos esforçamos para apoiar a comunidade local e contribuir para o bem-estar social e econômico das regiões em que atuamos.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="fit" paddingY="true" background="darkTheme1"> 
        <Container paddingX="true">

          <ContentText alignItemX="allCenter" gridCol="none" className="col-span-12" padding="true">
            <Caption style="dark">Código de conduta</Caption>
            <Headline alignText="allCenter" color="mainTextColors4">Nossa Responsabilidade</Headline>
            <Paragraph alignText="allCenter" color="mainTextColors5">Este Código de Conduta é um compromisso da Teracorporation com a ética e a integridade em todas as nossas atividades comerciais. Esperamos que nossos funcionários e colaboradores adotem esses valores em suas ações diárias e contribuam para o nosso sucesso de longo prazo.</Paragraph>
            
            <WrapperButton>
              <Button redirect="#" style="emphasis">Saiba mais</Button>
              <Button redirect="#" style="dark">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

        </Container>
      </Section>

    </main>
  )
}