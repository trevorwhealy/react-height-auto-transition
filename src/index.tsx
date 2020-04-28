import React, { memo } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function ReactHeightAutoTransition({ children, className }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const { current: el } = ref;

    if (!el || !el.firstChild) {
      return;
    }

    const firstChild = el.firstChild as HTMLDivElement;

    el.style.height = firstChild.scrollHeight + 'px';
  });

  return (
    <div className={className} ref={ref} style={style}>
      {children}
    </div>
  );
}

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'height 300ms ease',
};

export default memo(ReactHeightAutoTransition);
