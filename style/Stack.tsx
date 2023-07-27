import React, { ReactNode } from 'react';

export default function Stack({ children, sx }: { children: ReactNode, sx: string }) {
  return (
    <div className={sx}>
      {children}
    </div>
  );
}
