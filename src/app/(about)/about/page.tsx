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
  title: "Sobre Nós",
};

export default function Home () {
  return(
    <main className="">
    
      <Section height="full" paddingY="true" className="pt-28"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="ligth">Conheça tudo sobre a Teracorporation</Caption>
            <Headline alignText="lgStart" heading="h1">Quem nós somos</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors2">A Teracorporation atua há mais de 4 anos no mercado de soluções TI e conectividade. Com rede independente e robusta, atende empresas em todo território nacional. Desenvolvimento profissional e qualidade são preocupações constantes. Cultura empresarial forte é essencial.</Paragraph>
            
            <WrapperButton>
              <Button redirect="" style="emphasis">Agende sua consulta</Button>
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
            <Headline alignText="lgStart">Venha para o futuro da conexão</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors2"><strong>Está tendo problemas com a internet da sua empresa?</strong> <br /> <br /> Sabemos que se manter conectado é algo indispensável no dia a dia de qualquer empresa, então chega de passar sufoco! Venha para o futuro da conexão, venha para a Tera Corp. Nascemos com a missão de prover à sua empresa uma conexão alto desempenho e estabilidade, para atender todas as suas necessidades na hora de navegar em diversas plataformas!</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>
      
      <Section height="full" paddingY="true" background="darkTheme1"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="" padding="true">
            <Caption style="dark">Venha para o futuro da conexão</Caption>
            <Headline alignText="lgStart" color="mainTextColors4">Quem nós somos</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors5">Há mais de quatro anos atuando no mercado de soluções TI e conectividade, a Teracorporation vem conquistando o seu espaço no mercado de tecnologia.</Paragraph>
            <Paragraph alignText="lgStart" color="mainTextColors5">Com uma rede independente e robusta, a Teracorp foi construída para atender as melhores empresas da melhor forma. Com duas sedes no estado de São de Paulo, estamos focados em expandir nossos horizontes e levar nossas soluções para empresas de diferentes ramos em todo território nacional.</Paragraph>
            <Paragraph alignText="lgStart" color="mainTextColors5">O time da Teracorporation é composto por profissionais de alta performance e desenvolvimento profissional é uma das nossas preocupações, sempre realizamos capacitações em nosso time.</Paragraph>
            <Paragraph alignText="lgStart" color="mainTextColors5">Para nós, cultura empresarial forte e qualidade não é negociável.</Paragraph>
          </ContentText>

          <ContentImage background="darkTheme2" className="">
            <p className="text-[#9c9c9c]">Content Img</p>
          </ContentImage>

        </Container>
      </Section>

      <Section height="fit" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Headline alignText="lgStart">Nosssa missão</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors2">Com uma rede independente e robusta, a Teracorp foi construída para atender as melhores empresas da melhor forma. Com duas sedes no estado de São de Paulo, estamos focados em expandir nossos horizontes e levar nossas soluções para empresas de diferentes ramos em todo território nacional.</Paragraph>
          </ContentText>

          <ContentImage background="darkTheme2" className="order-1 h-[300px]">
            <p className="text-[#ffffff]">Content Img</p>
          </ContentImage>

        </Container>
      </Section>

      <Section height="fit" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-1" padding="true">
            <Headline alignText="lgStart">Nosssa Visão</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors2">Ser a maior e melhor empresa de soluções tecnológicas a nível América Latina, alinhando qualidade e eficiência com colaboradores engajados e clientes satisfeitos.</Paragraph>
          </ContentText>

          <ContentImage background="darkTheme2" className="h-[300px] order-2">
            <p className="text-[#ffffff]">Content Img</p>
          </ContentImage>

        </Container>
      </Section>

      <Section height="fit" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <Headline alignText="lgStart">Nosssos Valores</Headline>
            <Paragraph alignText="lgStart" color="mainTextColors2">Excelência no atendimento de seus clientes, busca incessante por tecnologia e comprometimento com o bem-estar de seus clientes e colaboradores.</Paragraph>
          </ContentText>

          <ContentImage background="darkTheme2" className="h-[300px] order-1">
            <p className="text-[#ffffff]">Content Img</p>
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}