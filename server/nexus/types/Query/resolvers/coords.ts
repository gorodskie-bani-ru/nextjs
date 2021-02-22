import { SourceValue } from 'nexus/dist/core'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { TemplateVarIDs } from '../../../constants'

/**
 * Координаты
 */
export const coordsResolver = (parent: SourceValue<'City' | 'Company'>) => {
  const coordsTV = parent.TemplateVarValues.find(
    (tv) => tv.tmplvarid === TemplateVarIDs.coors
  )

  let coords: NexusGenObjects['Coordinates'] | null = null

  if (coordsTV) {
    const arr = coordsTV.value.split(',')
    if (arr.length === 2) {
      const lat = parseFloat(arr[0])
      const lng = parseFloat(arr[1])

      if (isFinite(lat) && isFinite(lng)) {
        coords = {
          lat,
          lng,
        }
      }
    }
  }

  return coords
}
