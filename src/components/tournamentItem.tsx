import { Badge, Paper, Text } from '@mantine/core'
import { Tournament } from '@prisma/client'

export const TournamentItem = ({ tournament }: { tournament: Tournament }) => {
  return (
    <li className="pb-4 last-of-type:pb-20">
      <Paper shadow="md" radius="lg" withBorder p="xl">
        <Text>{tournament.name}</Text>
        <Badge color="blue">{tournament.type}</Badge>
      </Paper>
    </li>
  )
}
