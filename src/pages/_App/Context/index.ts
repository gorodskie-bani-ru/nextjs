import React from 'react'
import { CitiesQuery } from 'src/modules/gql/generated'

export type AppContextValue = {
  cities: CitiesQuery['cities']
}

export const AppContext = React.createContext<AppContextValue | null>(null)
