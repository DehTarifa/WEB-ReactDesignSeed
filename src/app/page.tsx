import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desginer System",
  description: "Desginer System for page",
  authors: [{ name: 'Denner Tarifa Ribeiro', url: ''}],
  keywords: 'Site, WebPage'
};

export default function Home() {
  return (
    <main className="">
      
      <nav className="bg-zinc-600 h-20 w-full flex fixed z-10">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 px-5">

          <div className="flex items-center col-span-4 lg:col-span-2 ">
            Brand
          </div>

          <div className="hidden md:flex items-center md:justify-end lg:justify-center gap-4 col-span-8 lg:col-span-8">
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
          </div>

          <div className="flex items-center justify-end lg:justify-center col-span-4 lgcol-span-2 md:hidden lg:flex lg:col-span-2">
            Button
          </div>

        </div>
      </nav>

      <section className="bg-zinc-200 w-full min-h-[100vh] flex pt-20">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 border">

          <div className="col-span-12 flex flex-col gap-2 justify-center items-center px-5">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
            <span className="bg-zinc-400 w-full max-w-[824px] flex items-center justify-center h-40">Headline</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Paragraph</span>

            <div className="w-full max-w-[624px] flex items-center justify-center gap-2">
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 1</span>
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 2</span>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-zinc-200 w-full">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 bg-zinc-300 min-h-[700px] py-20">

          <div className=" col-span-12 lg:col-span-6 flex flex-col gap-2 justify-center items-center px-5">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Headline</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Paragraph</span>

            <div className="w-full max-w-[624px] flex items-center justify-center lg:justify-start gap-2">
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 1</span>
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 2</span>
            </div>
          </div>
          
          <div className="bg-zinc-400 col-span-12 lg:col-span-6 flex items-center justify-center min-h-[420px]">
            <span>Imagem</span>
          </div>

        </div>
      </section>

      <section className="bg-zinc-200 w-full">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-2 p-5 min-h-[200px]">

          <div className="bg-zinc-400 flex items-center justify-center col-span-12 md:col-span-4 lg:col-span-4 h-[180px] ">Graduação</div>
          <div className="bg-zinc-400 flex items-center justify-center col-span-12 md:col-span-4 lg:col-span-4 h-[180px] ">Graduação</div>
          <div className="bg-zinc-400 flex items-center justify-center col-span-12 md:col-span-4 lg:col-span-4 h-[180px] ">Graduação</div>
        
        </div>
      </section>

      <section className="bg-zinc-200 w-full">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 bg-zinc-300 py-20">

          <div className=" col-span-12 flex flex-col gap-2 justify-center items-center px-5">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
          </div>
          
          <div className="col-span-12 grid grid-cols-12 gap-2 px-5">

            <span className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[450px] flex items-center justify-center">Card Projetos</span>
            <span className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[450px] flex items-center justify-center">Card Projetos</span>
            <span className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[450px] flex items-center justify-center">Card Projetos</span>
            <span className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[450px] hidden md:flex items-center justify-center lg:hidden xl:flex">Card Projetos</span>

          </div>

        </div>
      </section>

      <section className="bg-zinc-200 w-full">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 bg-zinc-200 min-h-[700px] py-20">

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-2 justify-center items-center px-5">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Headline</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Paragraph</span>

            <div className="w-full max-w-[624px] flex items-center justify-center lg:justify-start gap-2">
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 1</span>
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 2</span>
            </div>
          </div>
          
          <div className="bg-zinc-400 col-span-12 lg:col-span-6 flex items-center justify-center min-h-[420px] px-5">
            <span className="border w-full h-full flex items-center justify-center">Imagem</span>
          </div>

        </div>
      </section>

      <section className="bg-zinc-300 w-full">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 py-20">

          <div className=" col-span-12 lg:col-span-6 flex flex-col gap-2 justify-center items-center lg:items-start lg:order-2 px-5">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-40">Headline</span>

            <div className="w-full grid grid-cols-12 gap-2">
              <div className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-6 h-40 flex items-center justify-center">tecnologia</div>
              <div className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-6 h-40 flex items-center justify-center">tecnologia</div>
              <div className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-6 h-40 flex items-center justify-center">tecnologia</div>
              <div className="bg-zinc-400 col-span-12 md:col-span-6 lg:col-span-6 h-40 flex items-center justify-center">tecnologia</div>
            </div>
          </div>
          
          <div className="bg-zinc-400 col-span-12 lg:col-span-6 flex items-center justify-center min-h-[420px] px-5">
            <span className="border w-full h-full flex items-center justify-center">Imagem</span>
          </div>

        </div>
      </section>

      <section className="w-full scrollSectionCards flex overflow-hidden">
        <div className="flex scrollContainerCards">
          <div className="bg-zinc-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-zinc-500 min-w-[350px] h-[350px]"></div>
        </div>

        <div className="flex scrollContainerCards">
          <div className="bg-gray-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-500 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-400 min-w-[350px] h-[350px]"></div>
          <div className="bg-gray-500 min-w-[350px] h-[350px]"></div>
        </div>
      </section>

      <section className="w-full scrollSectionCards flex overflow-hidden justify-end">
        <div className="flex scrollContainerCards2">
          <div className="bg-zinc-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-zinc-500 min-w-[400px] h-[400px]"></div>
        </div>

        <div className="flex scrollContainerCards2">
          <div className="bg-gray-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-500 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-400 min-w-[400px] h-[400px]"></div>
          <div className="bg-gray-500 min-w-[400px] h-[400px]"></div>
        </div>
      </section>

      <section className="bg-zinc-200 w-full flex pt-20 px-5">
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-12 gap-5">

          <div className="col-span-12 flex flex-col gap-2 justify-center items-center bg-zinc-300 py-16 lg:py-32 px-5 rounded-xl">
            <span className="bg-zinc-400 w-full max-w-[624px] flex items-center justify-center h-8">Desciption</span>
            <span className="bg-zinc-400 w-full max-w-[824px] flex items-center justify-center h-40">Headline</span>

            <div className="w-full max-w-[624px] flex items-center justify-center gap-2">
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 1</span>
              <span className="bg-zinc-400 w-full max-w-[264px] flex items-center justify-center h-14">Button 2</span>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-zinc-700 w-full flex pt-20 -mt-36">
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-12 gap-5 pt-16">

          <div className="col-span-12 grid grid-cols-12 gap-2 justify-center items-center min-h-[350px] px-5">

            <div className="col-span-12">
              <span className="text-white bg-zinc-600 w-full flex h-10 items-center ">Brand</span>
            </div>

            <div className="col-span-12 flex gap-4">
              <span className="text-white bg-zinc-600 w-full flex">Links</span>
              <span className="text-white bg-zinc-600 w-full flex">Links</span>
              <span className="text-white bg-zinc-600 w-full flex">Links</span>
            </div>

            <div className="w-full max-w-[624px] flex items-center justify-center gap-2 col-span-12">
              <span className="bg-zinc-600 size-14 flex items-center justify-center text-white">S</span>
              <span className="bg-zinc-600 size-14 flex items-center justify-center text-white">S</span>
              <span className="bg-zinc-600 size-14 flex items-center justify-center text-white">S</span>
              <span className="bg-zinc-600 size-14 flex items-center justify-center text-white">S</span>
              <span className="bg-zinc-600 size-14 flex items-center justify-center text-white">S</span>
            </div>

            <div className="col-span-12">
              <span className="text-white bg-zinc-600 w-full flex">Copy</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
