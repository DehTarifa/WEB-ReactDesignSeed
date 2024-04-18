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
  title: "Nosso diferencial",
};

export default function Home () {
  return(
    <main className="">

      <Section height="full" paddingY="true" className="pt-20"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" padding="true">
            <Caption style="ligth">Nossos Diferenciais</Caption>
            <Headline alignText="lgStart" heading="h1">Nosso diferencial</Headline>
            <Paragraph alignText="lgStart">A Teracorporation tem rede independente e robusta para atender empresas, investimos em desenvolvimento profissional, cultura empresarial forte e compromisso com qualidade. Duas sedes em São Paulo e busca expandir. Soluções em TI e conectividade para todo território nacional.</Paragraph>
            
            <WrapperCommunicatory alignItem="lgStart" className="py-5">
              <Communicatory styleType="simple" headline={"Especialização"} subHeadline={"A Teracorporation é especializada em oferecer soluções tecnológicas personalizadas e inovadoras, desenvolvidas de acordo com as necessidades específicas de cada cliente."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="simple" headline={"Comprometimento"} subHeadline={"Estamos sempre comprometidos em oferecer as melhores soluções e serviços, garantindo a satisfação dos nossos clientes em todos os projetos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="simple" headline={"Agilidade"} subHeadline={"Atuamos de forma ágil e eficiente, garantindo rapidez na entrega das soluções tecnológicas e cumprindo prazos estabelecidos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>
            </WrapperCommunicatory>

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
            <Headline alignText="lgStart">Nosso diferencial</Headline>
            <Paragraph alignText="lgStart">A Teracorporation se destaca no mercado de tecnologia por oferecer uma rede independente e robusta para atender as melhores empresas da melhor forma possível. A empresa investe no desenvolvimento profissional de seus colaboradores, realizando capacitações constantes. Além disso, a cultura empresarial forte e o compromisso com a qualidade são valores não negociáveis para a Teracorporation. Com duas sedes no estado de São Paulo e o objetivo de expandir seus horizontes, a Teracorporation está preparada para levar soluções em TI e conectividade para empresas de diferentes ramos em todo o território nacional.</Paragraph>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-1">
            Content Img
          </ContentImage>

        </Container>
      </Section>

      <Section height="fit" paddingY="true"> 
        <Container paddingX="true">

          <ContentGrid gridCol="none" className='col-span-12'>
            <Headline alignText="lgStart" className='col-span-6'>A Teracorporation é uma empresa de soluções tecnológicas que se destaca no mercado por diversos diferenciais que a tornam referência no setor.</Headline>
            <Paragraph alignText="lgStart" className='col-span-6'>A Teracorporation se destaca no mercado de tecnologia por oferecer uma rede independente e robusta para atender as melhores empresas da melhor forma possível. A empresa investe no desenvolvimento </Paragraph>
          </ContentGrid>

        </Container>
      </Section>

      <Section height="full" paddingY="true"> 
        <Container paddingX="true">

          <ContentText alignItemX="lgStart" className="order-2" padding="true">
            <WrapperCommunicatory>
              <Communicatory styleType="highlightIcon" headline={"Especialização"} subHeadline={"A Teracorporation é especializada em oferecer soluções tecnológicas personalizadas e inovadoras, desenvolvidas de acordo com as necessidades específicas de cada cliente."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="highlightIcon" headline={"Comprometimento"} subHeadline={"Estamos sempre comprometidos em oferecer as melhores soluções e serviços, garantindo a satisfação dos nossos clientes em todos os projetos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="highlightIcon" headline={"Agilidade"} subHeadline={"Atuamos de forma ágil e eficiente, garantindo rapidez na entrega das soluções tecnológicas e cumprindo prazos estabelecidos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="highlightIcon" headline={"Atendimento"} subHeadline={"Oferecemos um atendimento personalizado e eficiente, com profissionais altamente capacitados e comprometidos em atender as necessidades e expectativas dos nossos clientes."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="highlightIcon" headline={"Eficiência"} subHeadline={"Buscamos constantemente a eficiência em nossas operações, adotando os melhores procedimentos e processos para garantir a qualidade dos nossos serviços."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="highlightIcon" headline={"Bons procedimentos"} subHeadline={"Adotamos os melhores procedimentos e práticas de gestão, sempre alinhados com as normas e regulamentações do setor, garantindo a qualidade e a segurança em todas as nossas atividades."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

            </WrapperCommunicatory>

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
            <Headline alignText="lgStart">A busca por melhorias</Headline>
            <Paragraph alignText="lgStart">Esses são apenas alguns dos diferenciais que fazem da Teracorporation uma empresa reconhecida pela qualidade e excelência em soluções tecnológicas. Estamos sempre em busca de inovação e melhoria contínua para oferecer o melhor aos nossos clientes e parceiros.</Paragraph>
          
            <WrapperCommunicatory alignItem="lgStart" className="py-5">
              <Communicatory styleType="simple" headline={"Especialização"} subHeadline={"A Teracorporation é especializada em oferecer soluções tecnológicas personalizadas e inovadoras, desenvolvidas de acordo com as necessidades específicas de cada cliente."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="simple" headline={"Comprometimento"} subHeadline={"Estamos sempre comprometidos em oferecer as melhores soluções e serviços, garantindo a satisfação dos nossos clientes em todos os projetos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="simple" headline={"Agilidade"} subHeadline={"Atuamos de forma ágil e eficiente, garantindo rapidez na entrega das soluções tecnológicas e cumprindo prazos estabelecidos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>

              <Communicatory styleType="simple" headline={"Agilidade"} subHeadline={"Atuamos de forma ágil e eficiente, garantindo rapidez na entrega das soluções tecnológicas e cumprindo prazos estabelecidos."}>
                <span className="size-5 flex items-center justify-center">a</span>
              </Communicatory>
            </WrapperCommunicatory>
          </ContentText>

          <ContentImage background="lightTheme1" className="order-2">
            Content Img
          </ContentImage>

        </Container>
      </Section>

    </main>
  )
}