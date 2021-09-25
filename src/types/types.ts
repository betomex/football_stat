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
  plan: string
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