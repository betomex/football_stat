export type leagueType = {
  area: {
    id: number
    name: string
    countryCode: string
    ensignUrl: string
  }
  code: string | null
  currentSeason: {
    startDate: string
    endDate: string
    id: number
  }
  emblemUrl: string
  id: number
  name: string
}

export type teamType = {
  area: {
    id: number
    name: string
  }
  crestUrl: string
  id: number
  name: string
  founded: number
}

export type leagueMatchesType = {
  competition: {
    area: {
      id: number
      name: string
    }
    id: number
    name: string
  }
  matches: Array<matchType>
}

type matchType = {
  homeTeam: {
    id: number
    name: string
  }
  awayTeam: {
    id: number
    name: string
  }
  score: {
    winner: string
  }
  group: string
  id: number
  stage: string
  utcDate: string
}