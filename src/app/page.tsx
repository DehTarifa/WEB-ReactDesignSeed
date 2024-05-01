import { Section } from "@/components/containers/Section";
import { Container } from "@/components/containers/Container";
import { ContentGrid } from "@/components/containers/ContentGrid";
import { ContentImage } from "@/components/containers/ContentImg";
import { ContentText } from "@/components/containers/ContentText";
import { WrapperButton } from "@/components/containers/WrapperButton";
import { WrapperCommunicatory } from "@/components/containers/WrapperCommunicatory";

export default function Home() {
  return (
    <main>

    <Section className="bg-zinc-50">
      <Container>
        
        <ContentText className="border">
          <h1 className="w-full max-w-[600px] lg:max-w-[656px] border">Headline</h1>
          <h1 className="w-full max-w-[600px] lg:max-w-[656px] border">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto, consequuntur vero, explicabo quisquam praesentium sint doloremque suscipit, quasi amet dignissimos! Magni deleniti asperiores officiis velit quos, iste quas minus!</h1>
          <h1 className="w-full max-w-[600px] lg:max-w-[656px] border">
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </h1>
        </ContentText>

        <ContentImage className="border">
          <div className="bg-sky-500 size-40 flex items-center justify-center text-white rounded-sm">
            img
          </div>
        </ContentImage>

      </Container>
    </Section>

    <Section className="bg-zinc-100">
      <Container >
        
        <ContentText className="border">
          <h1 className="w-full max-w-[600px] lg:max-w-[656px] border">Headline</h1>
          <h1 className="w-full max-w-[600px] lg:max-w-[656px] border">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto, consequuntur vero, explicabo quisquam praesentium sint doloremque suscipit, quasi amet dignissimos! Magni deleniti asperiores officiis velit quos, iste quas minus!</h1>
          
          <WrapperCommunicatory alignItem="center" className="border">
            <div className="w-full max-w-[500px] border flex items-center gap-5">
              <span className="size-10 flex items-center justify-center rounded-sm text-sky-500 bg-sky-100">i</span>
              <p className="text-zinc-500 text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="w-full max-w-[500px] border flex items-center gap-5">
              <span className="size-10 flex items-center justify-center rounded-sm text-sky-500 bg-sky-100">i</span>
              <p className="text-zinc-500 text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="w-full max-w-[500px] border flex items-center gap-5">
              <span className="size-10 flex items-center justify-center rounded-full text-sky-500 bg-sky-100">i</span>
              <p className="text-zinc-500 text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </WrapperCommunicatory>

          <WrapperButton >
            <p className="bg-sky-500 text-white py-2 px-6 rounded">Assine agora</p>
            <p className="bg-sky-500 text-white py-2 px-6 rounded">Veja mais informações</p>
          </WrapperButton>

        </ContentText>

        <ContentGrid padding="false">
          <div className="bg-zinc-200 col-span-6">img</div>
          <div className="bg-zinc-200 col-span-6">img</div>
          <div className="bg-zinc-200 col-span-12">img</div>
        </ContentGrid>

      </Container>
    </Section>

    <Section className="bg-zinc-50">
      <Container >
        
        <ContentImage gridCol="false" className="border bg-zinc-300 col-span-4">
          content img
        </ContentImage>

        <ContentGrid gridCol="false" padding="false" className="col-span-8">
          <div className="bg-zinc-200 col-span-6">img</div>
          <div className="bg-zinc-200 col-span-6">img</div>
          <div className="bg-zinc-200 col-span-6">img</div>
          <div className="bg-zinc-200 col-span-6">img</div>
        </ContentGrid>

      </Container>
    </Section>

    </main>
  )
}
