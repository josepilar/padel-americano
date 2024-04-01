import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prismaClient'
import { Tournament, TournamentType } from '@prisma/client'
import { ZodError, z } from 'zod'

const tournamentZod = z.object({
  name: z.string(),
  type: z.nativeEnum(TournamentType),
  ownerEmail: z.string().email(),
})

export async function GET(req: NextRequest) {
  const tournaments = await prisma.tournament.findMany()
  return NextResponse.json(tournaments)
}

export async function POST(req: NextRequest) {
  const tournamentConfig: Tournament = await req.json()
  try {
    tournamentZod.parse(tournamentConfig)
  } catch (error) {
    if (error instanceof ZodError) return NextResponse.json({ error: error.errors }, { status: 400 })
  }
  const tournament = await prisma.tournament.create({ data: tournamentConfig })
  return NextResponse.json(tournament)
}
