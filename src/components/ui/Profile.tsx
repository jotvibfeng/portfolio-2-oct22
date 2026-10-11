import { Button } from '@/components/ui/button';

export const Profile = () => {
  return (
    <aside className=''>
      <div className=''>
        <div className=''>
          <h1 className=''>Joakim</h1>
          <p className=''>Frontend Developer</p>
        </div>
        <img
          src='/path/to/profile.jpg'
          alt='Joakim'
          className=''
        />
      </div>
    </aside>
  );
};
