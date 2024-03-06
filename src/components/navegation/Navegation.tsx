"use client"

// ----------------------------------------------------------

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { NavigationMenu,NavigationMenuContent,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,navigationMenuTriggerStyle,} from "@/lib/navigation-menu"
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

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Link Dedicado",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Projetos Especiais",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Tera Cloud",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Tera Link",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tera Protection",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tera Security",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Tera Voip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Tera Bot",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
    <nav className="fixed z-10 bg-gray-primary w-full border-b border-[#ffffff0b]">
      <Container paddingX="true" background="white">

        <div className="col-span-2">
          <Link href={''} className="text-[20px] font-semibold text-white h-full flex items-center">
            <Image src={BrandImage} alt="" className="w-full max-w-[180px]"></Image>
          </Link>
        </div>

        <div className="col-span-10">
          <NavigationMenu >
            <NavigationMenuList>

              <NavegationMenuLink title="Home" url=""/>
              <NavegationMenuLink title="Link Dedicado" url=""/>
              <NavegationMenuLink title="ChatBot" url=""/>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr_1fr]">

                    <li className="row-span-4">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-secondary from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg text-white font-semibold">
                                TeraCorporation
                              </div>
                              <p className="text-sm leading-5 text-white opacity-50 font-light">
                                Descubra um mundo de possibilidades com tecnologias que fazem sua empresa ir além
                              </p>
                            </a>
                          </NavigationMenuLink>
                    </li>

                    <ListItem href="#" title="Conheça a TeraCorp">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>

                    <ListItem href="#" title="Nossa Localização">
                      How to install dependencies and structure your app.
                    </ListItem>

                    <ListItem href="#" title="Código de conduta">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>

                    <ListItem href="#" title="Diferenciais">
                      Styles for headings, paragraphs, lists...et </ListItem>

                    <ListItem href="#" title="Diversidade">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>

                    <ListItem href="#" title="Governança">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>

                    <ListItem href="#" title="LGPD">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] lg:grid-cols-[.75fr_1fr_1fr] lg:w-[800px] ">

                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-secondary from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg text-white font-semibold">
                            Tecnologias
                          </div>
                          <p className="text-sm leading-5 text-white opacity-50 font-light">
                            Descubra um mundo de possibilidades com tecnologias que fazem sua empresa ir além
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

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
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] lg:grid-cols-[.75fr_1fr_1fr] lg:w-[800px] ">

                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-secondary from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg text-white font-semibold">
                            Usabilidade
                          </div>
                          <p className="text-sm leading-5 text-white opacity-50 font-light">
                            Termos e condições
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

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
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-gray-secondary hover:text-blue-500 focus:bg-gray-secondary focus:text-blue-400",className)}{...props}>
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
