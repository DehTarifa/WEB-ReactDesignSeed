import { Container } from "@/components/containers/Container";
import { ContentText, ContentImage, ContentGrid } from "@/components/containers/Contents";
import { Section } from "@/components/containers/Section";
import { WrapperButton, WrapperCommunicatory } from "@/components/containers/Wrapper";
import { NavigationMenuDemo } from "@/components/navegation/Navegation";
import { Caption } from "@/components/typography/Caption";
import { Headline } from "@/components/typography/Headline";
import { Paragraph } from "@/components/typography/Paragraph";
import { Button } from "@/components/interface/Button";
import { Metadata } from "next";
import { Communicatory } from "@/components/interface/Communicatory";

export const metadata: Metadata = {
  title: "Desginer System",
};

export default function Home() {
  return (
    <main className="">
      
      <Section background="darkTheme1" height="full" className="pt-[100px]">
        <Container>

         <ContentText gridCol="none" className="col-span-12">
            <Caption>Comece agora sua jornada</Caption>
            <Headline heading="h1" size="large" color="mainTextColors5">Lorem ipsum dolor sit amet consectetur <strong className="text-green-palette-theme-1">adipisicing elit</strong> excepturi harum.</Headline>
            <Paragraph color="mainTextColors1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate velit aperiam, aut fuga quam iusto ut ipsam aut fuga quam</Paragraph>

            <WrapperButton>
              <Button style="solid">Assine agora</Button>
              <Button style="weak">Fale com um vendedor</Button>
            </WrapperButton>
         </ContentText>

         <ContentGrid gridCol="none" className="col-span-12">
            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r hover:bg-dark-theme-2 transition-all duration-500">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r hover:bg-dark-theme-2 transition-all duration-500">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r hover:bg-dark-theme-2 transition-all duration-500">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 hover:bg-dark-theme-2 transition-all duration-500">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>  
         </ContentGrid>

        </Container>
      </Section>

      <Section background="darkTheme2" height="full" paddingY="true">
        <Container>

          <ContentText alignItemX="lgStart" padding="true">
            <Caption>Comece agora sua jornada</Caption>
            <Headline size="medium" color="mainTextColors1" alignText="lgStart">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum.</Headline>
            <Paragraph color="mainTextColors1" alignText="lgStart">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate velit aperiam, aut fuga quam iusto ut ipsam aut fuga quam</Paragraph>

            <WrapperCommunicatory alignItem="lgStart">
              <Communicatory headline={'Segurança para empresas'} subHeadline={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate veli'} styleType="complete" colorHeadline="white" colorParagraph="white">A</Communicatory>
            </WrapperCommunicatory>

            <WrapperButton>
              <Button redirect="" style="emphasis">Saiba mais</Button>
              <Button redirect="" style="ligth">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

          <ContentImage padding="true">
            <div className="h-full w-full bg-green-palette-theme-1 rounded-lg"></div>
          </ContentImage>

        </Container>
      </Section>

      <Section background="darkTheme2" height="full" paddingY="true">
        <Container >

          <ContentText alignItemX="lgStart" padding="true" className="order-2">
            <Headline size="medium" color="mainTextColors1" alignText="lgStart">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum.</Headline>

            <WrapperCommunicatory alignItem="lgStart">
              <Communicatory headline={'Segurança para empresas'} subHeadline={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate veli'} styleType="complete" colorHeadline="white" colorParagraph="white">A</Communicatory>
              <Communicatory headline={'Segurança para empresas'} subHeadline={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate veli'} styleType="complete" colorHeadline="white" colorParagraph="white">A</Communicatory>
              <Communicatory headline={'Segurança para empresas'} subHeadline={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate veli'} styleType="complete" colorHeadline="white" colorParagraph="white">A</Communicatory>
            </WrapperCommunicatory>

            <WrapperButton>
              <Button redirect="" style="emphasis">Saiba mais</Button>
              <Button redirect="" style="ligth">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

          <ContentImage padding="true" className="order-1">
            <div className="h-full w-full bg-green-palette-theme-1 rounded-lg"></div>
          </ContentImage>

        </Container>
      </Section>

      <Section background="lightTheme3" height="full" paddingY="true">
        <Container>
          
          <ContentText padding="true" gridCol="none" className="col-span-12">
            <Caption>Comece agora sua jornada</Caption>
            <Headline size="medium" >Lorem ipsum dolor sit amet consectetur <strong className="text-green-palette-theme-1">adipisicing elit</strong> excepturi harum.</Headline>
            <Paragraph >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate velit aperiam, aut fuga quam iusto ut ipsam aut fuga quam</Paragraph>


            <WrapperButton>
              <Button redirect="" style="emphasis">Saiba mais</Button>
              <Button redirect="" style="ligth">Fale com um vendedor</Button>
            </WrapperButton>
          </ContentText>

          <ContentGrid gridCol="none" className="col-span-12">
            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-green-palette-theme-2 mb-2">Encontre muitos serviços</h3>
              <p className="text-dark-theme-4 text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-green-palette-theme-2 mb-2">Encontre muitos serviços</h3>
              <p className="text-dark-theme-4 text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-green-palette-theme-2 mb-2">Encontre muitos serviços</h3>
              <p className="text-dark-theme-4 text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5">
              <h3 className="font-semibold text-green-palette-theme-2 mb-2">Encontre muitos serviços</h3>
              <p className="text-dark-theme-4 text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>  
         </ContentGrid>

        </Container>
      </Section>
    </main>
  )
}
