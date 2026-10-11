import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowUpRight, SparkleIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const Projects = () => {
  return (
    <motion.section
      id='projects'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.1)}
      className='py-20'
    >
      <motion.div
        variants={fadeUp}
        className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'
      >
        <div>
          <p className='mb-3 flex w-fit items-center gap-2 rounded-sm border border-neutral-600 px-3 py-1 text-sm text-neutral-300'>
            <SparkleIcon className='size-4' />
            Selected work
          </p>
          <h2 className='text-3xl font-bold md:text-4xl'>My Projects</h2>
        </div>
        <p className='max-w-md text-sm leading-6 text-neutral-300 lg:text-right'>
          A selection of projects that demonstrate my front-end development
          skills and problem-solving approach.
        </p>
      </motion.div>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            variants={fadeUp}
            className='group overflow-hidden rounded-lg border border-neutral-600 bg-neutral-900 transition-colors hover:border-primary'
          >
            <Link
              to='/projects/$slug'
              params={{ slug: project.slug }}
              className='flex h-full flex-col'
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className='aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='mt-2 line-clamp-2 text-sm leading-6 text-neutral-300'>
                  {project.teaser}
                </p>
                <span className='mt-5 flex items-center gap-2 text-sm font-medium text-white'>
                  View project
                  <ArrowUpRight className='size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1' />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
