import { Button } from '@/components/ui/button';

export const Profile = () => {
  return (
    <aside className='mx-auto my-6 w-full max-w-md rounded-lg border border-neutral-600 bg-neutral-900 p-6 text-white'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold '>Joakim</h1>
          <p className='text-sm'>Frontend Developer</p>
        </div>
        <img
          src='/images/238F5448-B839-4EE1-BD69-EFC89E3BF2F1.JPG'
          alt='Joakim'
          className='mx-auto w-full max-w-64 rounded-2xl object-cover'
        />

        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization:</p>
          <p className='text-lg capitalize'>Frontend Development</p>
        </div>
        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Location:</p>
          <p className='text-lg capitalize'>Indre Østfold, Norway</p>
        </div>
        <Button className='mt-2 text-black size-lg'>Contact</Button>
      </div>
    </aside>
  );
};
