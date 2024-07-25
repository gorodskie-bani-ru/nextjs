import { CommentNoNestingFragment } from 'src/modules/gql/generated'

export type CommentLinkProps = React.PropsWithChildren<{
  comment: CommentNoNestingFragment
}>
