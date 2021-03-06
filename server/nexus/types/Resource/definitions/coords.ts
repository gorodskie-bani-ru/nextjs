import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { coordsResolver } from '../../Query/resolvers/coords'

export const coords = (
  t: ObjectDefinitionBlock<'City'> | ObjectDefinitionBlock<'Company'>
) => {
  // TODO as использовать - не хорошо, но нексус не понимает какой именно тип на входе
  ;(t as ObjectDefinitionBlock<'City'>).field('coords', {
    type: 'Coordinates',
    description: 'Координаты',
    resolve: coordsResolver,
  })
}
