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
  score: goalsType
  group: string
  id: number
  stage: string
  utcDate: string
  status: string
}

export type teamMatchesType = {
  competition: {
    area: {
      id: number
      name: string
      ensignUrl: string
    }
    id: number
    name: string
  }
  homeTeam: {
    id: number
    name: string
  }
  awayTeam: {
    id: number
    name: string
  }
  score: goalsType
  id: number
  status: string
  utcDate: string
}

type goalsType = {
  extraTime: {
    homeTeam: number | null
    awayTeam: number | null
  }
  fullTime: {
    homeTeam: number | null
    awayTeam: number | null
  }
  halfTime: {
    homeTeam: number | null
    awayTeam: number | null
  }
  penalties: {
    homeTeam: number | null
    awayTeam: number | null
  }
}