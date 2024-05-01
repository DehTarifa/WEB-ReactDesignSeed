import { Container } from "@/components/containers/Container";
import { ContentImage } from "@/components/containers/ContentImg";
import { ContentText } from "@/components/containers/ContentText";
import { Section } from "@/components/containers/Section";

export default function Home() {
  return (
    <main>

    <Section className="bg-zinc-50">
      <Container >
        
        <ContentText className="border">
          <h1 className="w-full max-w-[600px] border">Headline</h1>
          <h1 className="w-full max-w-[600px] border">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto, consequuntur vero, explicabo quisquam praesentium sint doloremque suscipit, quasi amet dignissimos! Magni deleniti asperiores officiis velit quos, iste quas minus!</h1>
          <h1 className="w-full max-w-[600px] border">
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

    </main>
  )
}
