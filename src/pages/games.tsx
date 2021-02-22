import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: []
    }
  }
}
