import React, { Suspense } from 'react';
import type { ReactNode } from 'react';

type LazyComponentProps = { children: ReactNode; loader?: ReactNode };

export default ({ children, loader }: LazyComponentProps) => (
  <Suspense fallback={loader ?? 'component loading'}>{children}</Suspense>
);
