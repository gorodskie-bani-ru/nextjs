import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.PropsWithChildren & {
  href: NextLinkProps['href']
  title?: string
  className?: string
}
