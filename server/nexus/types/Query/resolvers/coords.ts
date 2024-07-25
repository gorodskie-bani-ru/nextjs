import { SourceValue } from 'nexus/dist/core'
import { NexusGenObjects } from '../../../generated/nexus'
import { TemplateVarIDs } from '../../../constants'

/**
 * Координаты
 */
export const coordsResolver = (parent: SourceValue<'City' | 'Company'>) => {
  const coordsTV = parent.TemplateVarValues?.find(
    (tv) => tv.tmplvarid === TemplateVarIDs.coords
  )

  let coords: NexusGenObjects['Coordinates'] | null = null

  if (coordsTV) {
    const arr = coordsTV.value.split(',')
    if (arr.length > 1) {
      const lat = parseFloat(arr[1])
      const lng = parseFloat(arr[0])
      const zoom = parseFloat(arr[2]) || 12

      if (isFinite(lat) && isFinite(lng)) {
        coords = {
          lat,
          lng,
          zoom,
        }
      }
    }
  }

  return coords
}
