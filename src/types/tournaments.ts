export interface Player {
  name: string
  id: string
  gender: 'Male' | 'Female'
}

export interface Score {
  playerId: string
  score: number
}

export interface PairResult {
  player1: string
  player2: string
}

export interface Result {
  pair1: PairResult
  pair2: PairResult
}

export interface Tournaments {
  name: string
  players: Player[]
  scores: Score[]
  results: Result[]
}
