// src/routes/__root.tsx
import type { ReactNode } from 'react';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { StrictMode } from 'react';
// @ts-expect-error CSS imports are handled by the Vite bundler.
import '../styles.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <main className='grid min-h-screen place-items-center p-6'>
      <h1 className='text-2xl font-bold'>Page not found</h1>
    </main>
  ),
});

function RootComponent() {
  return (
    <RootDocument>
      <StrictMode>
        <Outlet />
      </StrictMode>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
