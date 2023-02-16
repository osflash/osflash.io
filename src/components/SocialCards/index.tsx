import { Card } from '~/components/Card'

export const SocialCards: React.FC = () => {
  return (
    <article className="space-y-2 py-6">
      <h1>Links</h1>
      <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 ">
        <Card href="https://github.com/osflash" icon="github">
          Github
        </Card>

        <Card href="https://www.linkedin.com/in/osflash" icon="linkedin">
          linked In
        </Card>

        <Card href="mailto:felipedasilvatomaz1996@gmail.com" icon="google">
          Gmail
        </Card>

        <Card href="https://discord.io/osflash" icon="discord">
          Discord
        </Card>

        <Card href="https://www.tiktok.com/@felipeflash10" icon="tiktok">
          Tiktok
        </Card>

        <Card href="https://twitter.com/felipe_flash" icon="twitter">
          Twitter
        </Card>

        <Card
          href="https://www.facebook.com/felipeflashdasilva"
          icon="facebook"
        >
          Facebook
        </Card>

        <Card
          href="https://www.instagram.com/felipeflashdasilva"
          icon="instagram"
        >
          Instagram
        </Card>

        <Card href="https://www.youtube.com/felipe10fe" icon="youtube">
          Youtube
        </Card>

        <Card href="https://www.twitch.tv/osflash" icon="twitch">
          Twitch
        </Card>

        <Card href="https://t.me/Felipe_Flash" icon="telegram">
          Telegram
        </Card>

        <Card href="https://www.buymeacoffee.com/osflash" icon="buymeacoffee">
          Buy Me A Coffee
        </Card>
      </div>
    </article>
  )
}
