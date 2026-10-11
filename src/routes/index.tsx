import { createFileRoute, Link } from '@tanstack/react-router';
import { ProjectCard } from '@/routes/projects/ProjectCard';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { projects } from '@/data/projects';
import { Profile } from '@/components/ui/Profile';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarContent>
            <SidebarMenuItem>
              <SidebarMenuButton render={<Link to='/' />}>
                {' '}
                Home{' '}
              </SidebarMenuButton>
              <SidebarMenuButton
                render={
                  <a
                    href='https://github.com/jotvibfeng/portfolio-2-oct22'
                    target='_blank'
                    rel='noreferrer'
                  />
                }
              >
                GitHub
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarContent>
        </SidebarHeader>
      </Sidebar>

      <SidebarInset>
        <Profile />
        <div className='mx-auto grid min-h-screen max-w-5xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
