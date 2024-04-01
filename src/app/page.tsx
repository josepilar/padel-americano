'use client'
import { TournamentItem } from '@/components/tournamentItem'
import { ApiEndPoints } from '@/constants'
import { ActionIcon } from '@mantine/core'
import { Tournament, TournamentType } from '@prisma/client'
import { IconPlus } from '@tabler/icons-react'
import useAxios from 'axios-hooks'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [tournamentsFetched] = useAxios<Tournament[]>(ApiEndPoints.tournament)
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [_, createTournament] = useAxios<Tournament>({ url: ApiEndPoints.tournament, method: 'POST' }, { manual: true })

  useEffect(() => {
    setTournaments(tournamentsFetched.data || [])
  }, [tournamentsFetched.data])

  const handleNewTournament = useCallback(() => {
    createTournament({
      data: {
        name: (Math.random() * 10000).toFixed(2),
        type: TournamentType.AMERICANO_MIXED,
        ownerEmail: 'test@test.com',
      },
    }).then((tournamentResp) => setTournaments([...tournaments, tournamentResp.data]))
  }, [createTournament, tournaments])

  if (tournamentsFetched.loading) return <div>Loading...</div>
  return (
    <div className="p-8 h-screen relative">
      <ul className="block">
        {tournaments || tournamentsFetched.data
          ? (tournaments || tournamentsFetched.data).map((tournament) => (
              <TournamentItem key={tournament.id} tournament={tournament} />
            ))
          : null}
      </ul>
      <div className="fixed right-6 bottom-6 block">
        <ActionIcon
          onClick={handleNewTournament}
          variant="filled"
          color="teal"
          size={65}
          radius={70}
          aria-label="Settings"
        >
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </div>
    </div>
  )
}
