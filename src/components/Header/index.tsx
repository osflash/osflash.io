import { FaGithub } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="py-4 justify-between flex items-center border-b">
      <Link href="/" className="flex items-center space-x-2">
        <div className="block h-10 w-10 overflow-hidden rounded-lg">
          <Image
            src={process.env.NEXT_PUBLIC_PROFILE_URL!}
            alt="Logo"
            width={40}
            height={40}
            className="text-transparent"
          />
        </div>

        <div className="flex flex-col space-y-1 text-sm leading-none">
          <h3>OsFlash</h3>
          <span>Minha página pessoal, onde compartilho minhas ideias!</span>
        </div>
      </Link>

      <Link
        href={process.env.NEXT_PUBLIC_GITHUB!}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Github"
        title="Github"
      >
        <FaGithub size={32} />
      </Link>
    </header>
  )
}
