import { ActionIcon, Anchor, Center } from '@mantine/core'
import { IconTrophy, IconTournament, IconBallTennis } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'

export const BottomNavigation = ({ children }: PropsWithChildren<{}>) => {
  return (
    <section className="h-screen">
      <main className="h-[calc(100vh-6rem)] p-6">{children}</main>
      <Center inline className="bg-black h-24 fixed bottom-0 w-full justify-evenly">
        <Anchor href="#" target="_blank">
          <ActionIcon size={80} variant="light">
            <IconBallTennis size={40} />
          </ActionIcon>
        </Anchor>
        <Anchor href="#" target="_blank">
          <ActionIcon size={80} variant="light">
            <IconTrophy size={40} />
          </ActionIcon>
        </Anchor>
      </Center>
    </section>
  )
}
