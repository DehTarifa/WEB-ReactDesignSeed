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
  title: "LGPD",
  description: "Generated by create next app",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-20"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="solid">Conheça tudo sobre a Teracorporation</Caption>
            <Headline alignText="lgStart" heading="h1">LGPD</Headline>
            <Paragraph alignText="lgStart">A Teracorporation está comprometida em proteger a privacidade e os dados de seus clientes e usuários, e, por isso, cumprimos rigorosamente com todas as normas e regulamentações relacionadas à privacidade, incluindo a Lei Geral de Proteção de Dados (LGPD).</Paragraph>
            
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
            <Headline alignText="lgStart">A governança é um aspecto fundamental para o sucesso de qualquer empresa.</Headline>
            <Paragraph alignText="lgStart">A LGPD é uma legislação brasileira que estabelece regras para o tratamento de dados pessoais por empresas públicas e privadas. Essa lei tem como objetivo garantir a proteção dos dados pessoais dos cidadãos, promover a privacidade e a segurança das informações, além de estabelecer direitos e deveres para as empresas que lidam com esses dados.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>
      
      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
            <Paragraph alignText="lgStart">Na Teracorporation, implementamos medidas técnicas e organizacionais para garantir a segurança dos dados pessoais que coletamos, processamos e armazenamos. Além disso, seguimos rigorosamente todas as exigências da LGPD em relação ao tratamento de dados pessoais, incluindo a obtenção de consentimento explícito dos titulares dos dados, o acesso aos dados apenas por pessoas autorizadas e a exclusão dos dados após o término do tratamento</Paragraph>
            <Paragraph alignText="lgStart">Nosso compromisso com a proteção de dados pessoais vai além do cumprimento da LGPD. Temos uma equipe dedicada à privacidade e segurança da informação, que está sempre atualizada sobre as melhores práticas e as novas regulamentações, garantindo a segurança dos dados pessoais de nossos clientes e usuários.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Paragraph alignText="lgStart">Estamos comprometidos em proteger a privacidade e os dados de nossos clientes e usuários, e trabalhamos diariamente para manter os mais altos padrões de segurança e privacidade em todos os nossos processos e serviços.</Paragraph>
            <Paragraph alignText="lgStart">Na Teracorporation, acreditamos que a privacidade é um direito fundamental e estamos comprometidos em protegê-la.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}