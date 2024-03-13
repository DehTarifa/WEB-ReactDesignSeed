import { Container } from "@/components/containers/Container";
import { ContentText } from "@/components/containers/Contents";
import { Section } from "@/components/containers/Section";
import { WrapperButton } from "@/components/containers/Wrapper";
import { Button } from "@/components/interface/Button";
import { Caption } from "@/components/typography/Caption";
import { Headline } from "@/components/typography/Headline";
import { Paragraph } from "@/components/typography/Paragraph";

export default function Home () {
  return(
    <main className="">

      <Section background="lightTheme4" height="full">
        <Container>

          <ContentText className="col-span-12" gridCol="none" >
            <Headline size="large" heading="h1">One page for about illum asperiores ducimus quibusdam quia beatae impedit</Headline>
            <Paragraph color="mainTextColors4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corporis delectus illum asperiores ducimus quibusdam quia beatae impedit laudantium doloribus totam aut cum, pariatur non eum doloremque similique accusamus quae.</Paragraph>
          </ContentText>

        </Container>
      </Section>

      <Section background="featuredTheme1" height="full">
        <Container>

          <ContentText className="col-span-12" gridCol="none" >
            <Headline size="large" color="mainTextColors6">Nihil corporis delectus illum asperiores ducimus quibusdam quia beatae impedit</Headline>
            <Paragraph color="mainTextColors5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corporis delectus illum asperiores ducimus quibusdam quia beatae impedit laudantium doloribus totam aut cum, pariatur non eum doloremque similique accusamus quae.</Paragraph>
          </ContentText>

        </Container>
      </Section>

      <Section height="full">
        <Container>

          <ContentText>
            <Headline color="mainTextColors1" alignText="lgStart">Nihil corporis delectus illum asperiores ducimus quibusdam quia beatae impedit</Headline>
            <Paragraph color="mainTextColors5" alignText="lgStart">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corporis delectus illum asperiores ducimus quibusdam quia beatae impedit laudantium doloribus totam aut cum, pariatur non eum doloremque similique accusamus quae.</Paragraph>
            <Paragraph color="mainTextColors5" alignText="lgStart">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem rerum dolore velit, minima quam qui voluptatum deleniti porro temporibus aliquam laborum culpa laboriosam recusandae cum! Et iure nihil ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum impedit tenetur quas velit ex! Impedit, illo, necessitatibus perspiciatis eius architecto rerum nesciunt doloremque ullam voluptas incidunt, consequatur autem molestias!</Paragraph>
         
            <WrapperButton>
              <Button style="weak">Assine agora</Button>
              <Button style="textded">Assine agora</Button>
            </WrapperButton>
         </ContentText>

        </Container>
      </Section>

    </main>
  )
}