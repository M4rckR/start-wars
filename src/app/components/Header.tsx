import Link from "next/link"

export const Header = () => {
  return (
    <div className="bg-gray-900 py-4 fixed w-full top-0">
        <header className="max-w-7xl mx-auto px-4 text-white flex justify-between items-center">
            <p className="text-2xl font-bold">Star Wars</p>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/characters">Personajes</Link>
                <Link href="/planets">Planetas</Link>
                <Link href="/starships">Naves</Link>
            </div>
        </header>
    </div>
  )
}
