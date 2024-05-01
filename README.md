  const [contador, setContador] = useState(0)

  function clickName () {
    setContador(x=> x + 1)
  }

      <div onClick={clickName} className={twMerge('grid grid-cols-12 gap-5 mx-auto ', widths[width], paddingsX[paddingX], paddingsY[paddingY], className)}>
      <span className="text-red-500 font-bold">
      {children}

      clicou {contador} vezes
      </span>
    </div>