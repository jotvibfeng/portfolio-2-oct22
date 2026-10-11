import { Link } from '@tanstack/react-router';
import type { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className='aspect-square font-syne'>
      <Link
        to='/projects/$slug'
        params={{ slug: project.slug }}
        className='flex size-full flex-col overflow-hidden rounded-xl border shadow transition-shadow hover:shadow-lg'
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className='h-1/2 w-full object-cover'
        />
        <div className='flex flex-1 flex-col p-4'>
          <h2>{project.title}</h2>
          <p className='line-clamp-2 text-sm text-white'>{project.teaser}</p>
          <Button>Read more &rarr;</Button>
        </div>
      </Link>
    </article>
  );
}
