const TailwindButton = ({text, cls}:{text:string, cls?:string}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-dull_gold">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e6ba63_0%,#543e12_50%,#e6ba63_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-blue-dull font-medium text-gold backdrop-blur-3xl ${cls}`}>
            {text}
        </span>
    </button>
  )
}

export default TailwindButton
