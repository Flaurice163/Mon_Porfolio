
interface TittleProps{
  title: string
}

const Tittle = ({title}:TittleProps) => {
  return (
    <div className="text-center">
      <h1 className="uppercase font-bold mb-3 text-center text-3xl text-white">{title}</h1>
      <div className="mx-auto h-1 w-24 rounded-full bg-warning"></div>
    </div>
  )
}

export default Tittle
