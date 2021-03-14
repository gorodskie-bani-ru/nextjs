import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import { CitiesPageViewProps } from './interfaces'
import Link from 'next/link'

const CitiesPageView: React.FC<CitiesPageViewProps> = ({ cities }) => {
  return useMemo(() => {
    return (
      <Grid container>
        {cities.map((n) => {
          // if(n.uri?.startsWith('city/')) {
          //   return null;
          // }

          return (
            <Grid key={n.id} item xs={12} sm={4} md={3}>
              <Link href={(n.uri && '/' + n.uri.replace(/\/+$/, '')) || '/'}>
                <a title={n.pagetitle}>{n.pagetitle}</a>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    )
  }, [cities])
}

export default CitiesPageView
