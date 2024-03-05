import { Container } from "@/components/containers/Container";
import { ContentText, ContentImage, ContentGrid } from "@/components/containers/Contents";
import { Section } from "@/components/containers/Section";
import { WrapperButton, WrapperCommunicatory } from "@/components/containers/Wrapper";
import { NavigationMenuDemo } from "@/components/navegation/Navegation";
import { Caption } from "@/components/typography/Caption";
import { Headline } from "@/components/typography/Headline";
import { Paragraph } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desginer System",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="">
      
      <NavigationMenuDemo/>

      <Section background="dark" height="full" className="pt-[100px]">
        <Container background="dark">

         <ContentText gridCol="none" className="col-span-12">
            <Caption>Comece agora sua jornada</Caption>
            <Headline heading="h1" size="large" color="light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum.</Headline>
            <Paragraph color="light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi minus voluptate velit aperiam, aut fuga quam iusto ut ipsam aut fuga quam</Paragraph>

            <WrapperButton>
              <Button style="solid">Assine agora</Button>
              <Button style="weak">Fale com um vendedor</Button>
            </WrapperButton>
         </ContentText>

         <ContentGrid gridCol="none" className="col-span-12">
            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5 border-[#ffffff0b] border-r">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>

            <div className="col-span-3 flex flex-col justify-center px-5">
              <h3 className="font-semibold text-white mb-2">Encontre muitos serviços</h3>
              <p className="text-white text-sm opacity-50 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit, doloremque, officiis magni autem repellendus hic</p>
            </div>  
         </ContentGrid>

        </Container>
      </Section>

    </main>
  )
}
