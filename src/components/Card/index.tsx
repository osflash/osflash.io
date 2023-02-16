import { BsBoxArrowUpRight } from 'react-icons/bs'
import {
  FaDiscord,
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

import Link from 'next/link'

import { match } from 'ts-pattern'

type Icons =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'google'
  | 'instagram'
  | 'linkedin'
  | 'telegram'
  | 'tiktok'
  | 'twitch'
  | 'twitter'
  | 'youtube'
  | 'buymeacoffee'

interface CardProps {
  href: string
  children: React.ReactNode
  icon: Icons
}

const getIcon = (icon: Icons) =>
  match(icon)
    .with('discord', () => <FaDiscord />)
    .with('facebook', () => <FaFacebookSquare />)
    .with('github', () => <FaGithub />)
    .with('google', () => <FaGoogle />)
    .with('instagram', () => <FaInstagram />)
    .with('linkedin', () => <FaLinkedin />)
    .with('telegram', () => <FaTelegram />)
    .with('tiktok', () => <FaTiktok />)
    .with('twitch', () => <FaTwitch />)
    .with('twitter', () => <FaTwitter />)
    .with('youtube', () => <FaYoutube />)
    .with('buymeacoffee', () => null)

    .exhaustive()

export const Card: React.FC<CardProps> = ({ href, children, icon }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={children?.toString()}
      title={children?.toString()}
    >
      <div className="flex gap-2 w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">
        <div className="flex justify-between items-center gap-3">
          {getIcon(icon)}
          <strong>{children}</strong>
        </div>

        <BsBoxArrowUpRight />
      </div>
    </Link>
  )
}
