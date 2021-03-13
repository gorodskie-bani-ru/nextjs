import { Grid } from '@material-ui/core'
import React, { useMemo } from 'react'
import { CompanyWorkTimeProps } from './interfaces'

import clock from './img/007-clock.svg'
import SvgIcon from 'src/components/ui/SvgIcon'

const CompanyWorkTime: React.FC<CompanyWorkTimeProps> = ({
  company,
  ...other
}) => {
  return useMemo(() => {
    const workTime = company.workTime

    const schedulesContent = ''

    if (!workTime && !schedulesContent) {
      return null
    }

    return (
      <>
        <div
          style={{
            overflow: 'hidden',
          }}
          {...other}
        >
          {schedulesContent ? (
            schedulesContent
          ) : (
            <Grid
              container
              style={{
                marginBottom: workTime ? 10 : undefined,
              }}
            >
              <SvgIcon src={clock} alt="time" />{' '}
              <span
                style={{
                  paddingLeft: 5,
                  paddingRight: 3,
                }}
              >
                Время работы
              </span>
            </Grid>
          )}

          {(workTime && (
            <div
              style={{
                whiteSpace: 'pre-wrap',
              }}
              dangerouslySetInnerHTML={{
                __html: workTime,
              }}
            ></div>
          )) ||
            null}
        </div>
      </>
    )
  }, [company.workTime, other])
}

export default CompanyWorkTime
