import * as React from 'react';

type Props = {
  children: React.ReactNode
}

function Component({ children }: Props) {

  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { current: el } = ref
    if (el && el.firstChild) {
      const firstChild = el.firstChild as HTMLDivElement
      el.style.height = firstChild.scrollHeight + 'px'
    }
  })

  return (
    <div ref={ref} style={style}>
      <div>{children}</div>
    </div>
  )
}

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'height 300ms ease'
}

export const ReactHeightAutoTransition = React.memo(Component)