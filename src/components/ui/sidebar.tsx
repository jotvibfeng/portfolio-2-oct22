import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { navLinks } from '@/constant';

export const Sidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant='ghost'
              size='icon'
              className='fixed top-4 right-4 z-50 m-4 cursor-pointer rounded-full border-2 bg-neutral-800 px-5 py-5 hover:border-primary hover:text-primary'
            >
              <MenuIcon className='size-8' />
            </Button>
          }
        />
        <SheetContent
          side='right'
          className='w-84 bg-neutral-900 text-white py-6 pl-10'
        >
          <SheetTitle className='text-lg font-semibold'>Menu</SheetTitle>
          <nav className='flex flex-col gap-4'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.link}
                  href={link.link}
                  className='flex items-center gap-2 text-white hover:text-primary'
                >
                  <Icon className='size-6' />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
