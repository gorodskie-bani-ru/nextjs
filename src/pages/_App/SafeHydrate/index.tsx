import { useEffect, useState } from 'react'

export function SafeHydrate({ children }: React.PropsWithChildren) {
  const [inited, initedSetter] = useState(false)

  useEffect(() => {
    initedSetter(true)
  }, [initedSetter])

  return <div>{inited ? children : null}</div>
}
