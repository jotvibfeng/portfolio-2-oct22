import { motion } from 'motion/react';
import { SparkleIcon } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      id='hero'
      className='flex flex-col items-center pt-20 lg:items-end'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon className='size-5' /> <span>Introduction</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='mt-2 max-w-3xl text-center text-4xl font-semibold capitalize md:text-5xl md:leading-16 lg:text-right lg:text-6xl'
      >
        I'm <span className='text-primary'>Joakim</span> Frontend Developer
      </motion.h1>
      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2 '
      >
        <Button
          render={<a href='#projects' />}
          className='text-black'
        >
          My Projects
        </Button>
      </motion.div>
    </motion.section>
  );
};
