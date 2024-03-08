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
    title:        "Sobre mim",
    href:         "",
    description:  "Conheça um pouco sobre mim e minha tragetória até o mundo da tecnoligia",
  },
  {
    title:        "Trabalhos Profissioanais",
    href:         "",
    description:  "Veja os trabalhos e web sites que desenvolvi ao longo da minha carreira",
  },
  {
    title:        "Habilidade Profissional",
    href:         "",
    description:  "Conheça minhas habilidades profissionais que me tornaram capacitado para o desenvolvimento",
  },
  {
    title:        "Objetivos",
    href:         "",
    description:  "Minha tragetório profissional pra se tornar um especialista em UI & UX",
  },
  {
    title:        "Formação Acadêmica",
    href:         "",
    description:  "Conheça um pouco sobre mim e minha tragetória até o mundo da tecnoligia",
  },
  {
    title:        "Cursos Complementares",
    href:         "",
    description:  "Conheça um pouco sobre mim e minha tragetória até o mundo da tecnoligia",
  },
  {
    title:        "Experiência Profissional",
    href:         "",
    description:  "Conheça um pouco sobre mim e minha tragetória até o mundo da tecnoligia",
  },
]

const services: { title: string; href: string; description: string }[] = [
  {
    title:        "Programação",
    href:         "",
    description:  "Minha base de estudos para programação",
  },
  {
    title:        "Figma",
    href:         "",
    description:  "Documentaçaõ sobre o figma e conceitos de aprendizado",
  },
  {
    title:        "User Experience",
    href:         "",
    description:  "Conceito sobre o user Experience",
  },
  {
    title:        "User Interface",
    href:         "",
    description:  "Base de estudos sobre o ui e componentização",
  },
  {
    title:        "Canvas",
    href:         "",
    description:  "Base de estudos sobre Designer Canvas",
  },
  {
    title:        "Next Js",
    href:         "",
    description:  "Conhecimentos sbre o Next js",
  },
  {
    title:        "React ",
    href:         "",
    description:  "Base de conhecimento sobre o react",
  },
  {
    title:        "TypeScript",
    href:         "",
    description:  "Conhecimentos sbre o TypeScript",
  },
]

const utilities: { title: string; href: string; description: string }[] = [
  {
    title: "Termos de utilização",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Contratos",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Fale conosco",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Trabalhe Conosco",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Contato NOC",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Apresentação",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Outros Serviços",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  
]

// ----------------------------------------------------------

export function NavigationMenuDemo() {
  return (
    <nav className="fixed z-10 bg-dark-theme-1 w-full border-b border-[#ffffff0b]">
      <Container paddingX="true">

        <div className="col-span-2">
          <Link href={''} className="text-[20px] font-semibold text-white h-full flex items-center">
            <p className="text-[26px]">Denner Tarifa</p>
          </Link>
        </div>

        <div className="col-span-10">
          <NavigationMenu >
            <NavigationMenuList>

              <NavegationMenuLink title="Home" url=""/>
              <NavegationMenuLink title="Trabalhos" url=""/>
              <NavegationMenuLink title="Habilidades" url=""/>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre mim</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-fit lg:grid-cols-[250px_220px_220px]">

                    <NavegationContentInfo title="Sobre mim" subtitle="Desenvolver Front-End com especialidade em UX e UI" url="#"/>

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
                <NavigationMenuTrigger>Documentação</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-fit lg:grid-cols-[250px_220px_220px]">

                  <NavegationContentInfo title="Documentação" subtitle="Documentação de código" url="#"/>

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


