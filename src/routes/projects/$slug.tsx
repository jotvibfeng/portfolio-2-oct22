import { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ExternalLink,
  GitBranch,
  Link2,
} from 'lucide-react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
      throw notFound();
    }

    return { project };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { project } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  async function copyProjectLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setCopyError(null);
    } catch (error) {
      console.error('Unable to copy the project link:', error);
      setCopyError('Could not copy the link. Please copy it from the address bar.');
    }
  }

  return (
    <main className='min-h-screen bg-neutral-900 px-6 py-10 text-white md:py-16'>
      <article className='mx-auto max-w-4xl'>
        <Link
          to='/'
          className='mb-10 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white'
        >
          <ArrowLeft className='size-4' />
          Back to portfolio
        </Link>

        <header className='mb-10'>
          <p className='mb-3 flex w-fit items-center gap-2 rounded-sm border border-neutral-600 px-3 py-1 text-sm text-neutral-300'>
            Project case study
          </p>
          <h1 className='max-w-3xl text-4xl font-semibold md:text-5xl'>
            {project.title}
          </h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-neutral-300'>
            {project.description}
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <button
              type='button'
              onClick={copyProjectLink}
              className='inline-flex items-center gap-2 rounded-md border border-neutral-600 px-4 py-2 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black'
            >
              {copied ? <Check className='size-4' /> : <Link2 className='size-4' />}
              {copied ? 'Link copied' : 'Copy link'}
            </button>
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200'
            >
              Visit live site
              <ExternalLink className='size-4' />
            </a>
            <a
              href={project.readmeUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-md border border-neutral-600 px-4 py-2 text-sm font-medium transition-colors hover:border-white'
            >
              View README
              <GitBranch className='size-4' />
            </a>
          </div>

          {copyError && (
            <p className='mt-3 text-sm text-red-300' role='alert'>
              {copyError}
            </p>
          )}
        </header>

        <figure className='overflow-hidden rounded-lg border border-neutral-600 bg-black'>
          <img
            src={project.image}
            alt={project.title}
            className='aspect-video w-full object-cover'
          />
          <figcaption className='border-t border-neutral-600 px-4 py-3 text-sm text-neutral-300'>
            {project.imageCaption}
          </figcaption>
        </figure>

        <section className='mt-10 border-t border-neutral-600 pt-10'>
          <h2 className='text-2xl font-semibold'>About the project</h2>
          <div className='mt-5 space-y-5 text-base leading-8 text-neutral-300'>
            {project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
