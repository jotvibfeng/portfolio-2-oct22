import { createFileRoute } from '@tanstack/react-router';

import { Sidebar } from '@/components/ui/sidebar';
import { FloatingMenu } from '@/components/ui/FloatingMenu';
import { App } from '@/components/ui/App';
import { Projects } from '@/components/ui/Projects';
import { Profile } from '@/components/ui/Profile';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Sidebar />
      <FloatingMenu />
      <section className='mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-start'>
        <Profile />
        <App />
      </section>
      <div className='mx-auto max-w-7xl px-6'>
        <Projects />
      </div>
    </>
  );
}
