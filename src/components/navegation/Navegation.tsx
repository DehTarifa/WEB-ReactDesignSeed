"use client"

// ----------------------------------------------------------

import * as React from "react"
import Link from "next/link"

import { cn } from "@/util/utils"
import { NavigationMenu,NavigationMenuContent,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu"
import { Container } from "../containers/Container"
import Image from "next/image"
import BrandImage from "/public/logo.png"

// ----------------------------------------------------------

interface NavegationMenuLinkProps {
  title: string
  url: string
}

interface NavegationContentInfoProps {
  title: string
  subtitle: string
  url: string
}

// ----------------------------------------------------------

const aboutUs: { title: string; href: string; description: string }[] = [
  {
    title:        "Sobre a TeraCorporation",
    href:         "/about",
    description:  "A Teracorporation atua há mais de 4 anos no mercado de soluções TI",
  },
  {
    title:        "Onde Estamos",
    href:         "/location",
    description:  "A Teracorporation é uma empresa de soluções tecnológicas comprometida em fornecer serviços ",
  },
  {
    title:        "Código Conduta",
    href:         "/conduct",
    description:  "Na Teracorporation, acreditamos que a ética e a integridade são fundamentais para ",
  },
  {
    title:        "Nosso Diferencial",
    href:         "/differences",
    description:  "A Teracorporation tem rede independente e robusta para atender ",
  },
  {
    title:        "Diversidade",
    href:         "/diversity",
    description:  "A Teracorporation valoriza e promove a diversidade para alcançar ",
  },
  {
    title:        "Governança",
    href:         "governance",
    description:  "Para empresas de soluções tecnológicas, isso se torna ainda mais relevante",
  },
  {
    title:        "LGPD",
    href:         "/lgpd",
    description:  "A Teracorporation está comprometida em proteger a privacidade ",
  },
]

const services: { title: string; href: string; description: string }[] = [
  {
    title:        "Link Dedicado",
    href:         "/dedicatedLink",
    description:  "Toda a rede da Teracorporation foi desenvolvida em topologia de anel",
  },
  {
    title:        "Projetos Especiais",
    href:         "",
    description:  "Procurando soluções personalizadas para sua empresa?",
  },
  {
    title:        "Tera Cloud",
    href:         "",
    description:  "Não arrisque seus dados, proteja-os com o TeraCLOUD!",
  },
  {
    title:        "Link Temporário",
    href:         "",
    description:  "Se você está procurando uma conexão de internet de alta velocidade",
  },
  {
    title:        "Tera Protection",
    href:         "",
    description:  "A segurança da informação é uma das principais preocupações das empresas",
  },
  {
    title:        "Tera Security",
    href:         "",
    description:  "Com nossa solução, você terá o controle completo do movimento de pessoas",
  },
  {
    title:        "Tera Voip ",
    href:         "",
    description:  "A telefonia em nuvem da Teracorporation, também conhecida como telefonia VOIP",
  },
  {
    title:        "TeraBot",
    href:         "",
    description:  "Revolucione o atendimento de sua empresa",
  },
  {
    title:        "Fibra Apagada",
    href:         "",
    description:  "A fibra apagada vem como um serviço externo da teracoporation",
  },
]

const utilities: { title: string; href: string; description: string }[] = [
  {
    title: "Comodato Equipamentos",
    href: "https://www.teracorporation.com.br/termos/COMODATO.pdf",
    description:
      "O contrato que defere ao AT 579 e 585 da Lei 10406/2022",
  },
  {
    title: "Contrato Permanência",
    href: "https://www.teracorporation.com.br/termos/CONTRATO_PERMANENCIA.pdf",
    description:
      "O contrato que defere ao AT 579 e 585 da Lei 10406/2022.",
  },
  {
    title: "Prestação de Serviços",
    href: "https://www.teracorporation.com.br/termos/CONTRATOSCM+SVA_compressed.pdf",
    description:
      "O contrato visa falar sobre a prestação de serviços ",
  },
  {
    title: "Politica de Privacidade",
    href: "https://www.teracorporation.com.br/termos/CONTRATOSCM+SVA_compressed.pdf",
    description:
      "alguns dados pessoais que pertencem ao cliente para fins específicos de oferta de produtos ",
  },
  {
    title: "Trabalhe Conosco",
    href: "#",
    description:
      "Venha fazer parte da nossa equipe",
  },
  {
    title: "Falar com o NOC",
    href: "#",
    description:
      "Fale diretamente com nosso suporte especializado do NOC",
  },
  {
    title: "Falar com o Comercial",
    href: "#",
    description:
      "Fale com seu vendedor de sucesso",
  },
]

// ----------------------------------------------------------

export function NavigationMenuDemo() {
  return (
    <nav className="fixed z-10 bg-light-theme-3 w-full border-b border-[#ffffff0b]">
      <Container paddingX="true">

        <div className="col-span-2">
          <Link href={''} className="text-[20px] font-semibold text-white h-full flex items-center">
            <p className="text-[20px]">Tera Corporation</p>
          </Link>
        </div>

        <div className="col-span-10">
          <NavigationMenu >
            <NavigationMenuList>

              <NavegationMenuLink title="Home" url=""/>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-fit lg:grid-cols-[250px_220px_220px]">

                    <NavegationContentInfo title="Documentação" subtitle="Documentação de código" url="#"/>

                    {aboutUs.map((about) => (
                      <ListItem
                        key={about.title}
                        title={about.title}
                        href={about.href}
                      >
                        {about.description}
                      </ListItem>
                    ))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-fit lg:grid-cols-[220px_220px_220px]">

                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Utilidades</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-fit lg:grid-cols-[250px_220px_220px]">

                    <NavegationContentInfo title="Documentação" subtitle="Documentação de código" url="#"/>

                    {utilities.map((utilitie) => (
                      <ListItem
                        key={utilitie.title}
                        title={utilitie.title}
                        href={utilitie.href}
                      >
                        {utilitie.description}
                      </ListItem>
                    ))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavegationMenuLink title="ChatBot" url=""/>
              <NavegationMenuLink title="Link Dedicado" url=""/>
              <NavegationMenuLink title="Blog" url=""/>

              <NavegationMenuLink title="Contato" url=""/>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="col-span-1 md:hidden border">
          Menu
        </div>

      </Container>
    </nav>
  )
}

// ----------------------------------------------------------

function NavegationMenuLink ({ title, url } : NavegationMenuLinkProps){
  return(
    <NavigationMenuItem>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

function NavegationContentInfo ({ title, subtitle, url } : NavegationContentInfoProps ) {

  let styleInfo = 'flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-secondary from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md '

  return(
    <li className="row-span-4">
      <NavigationMenuLink asChild>
        <Link href={url} className={styleInfo}>
          <h3 className="mb-2 mt-4 text-lg text-white font-semibold">
            {title}
          </h3>
          <p className="text-sm leading-5 text-white opacity-50 font-light">
            {subtitle}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// ----------------------------------------------------------

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-dark-theme-3 focus:bg-gray-secondary",className)}{...props}>
          <div className="text-sm leading-none font-semibold">{title}</div>
          <p className="line-clamp-2 text-sm font-light leading-snug text-white opacity-50">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

// ----------------------------------------------------------


