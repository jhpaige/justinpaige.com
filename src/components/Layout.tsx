import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import avatarImg from '@/assets/Avatar.jpg';

const linkedin = 'https://www.linkedin.com/in/justin-paige/';

export function Layout() {
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileNavOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 px-5 py-4.5 flex justify-between items-center gap-3 bg-linear-to-b from-[rgba(7,7,11,0.72)] to-[rgba(7,7,11,0.35)] backdrop-blur-md border-b border-white/8">
        <a
          className="flex items-center gap-3.5 font-bold tracking-[0.2px]"
          href="#"
        >
          <Avatar className="w-10 h-10 shrink-0 ring-2 ring-white/12 ring-offset-2 ring-offset-[#07070b]">
            <AvatarImage src={avatarImg} alt="Justin Paige" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <span className="text-[14px] text-center">Justin Paige</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-1.5 items-center text-[13px]">
          <Button variant="ghost" size="sm" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#experience">Experience</a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Dialog open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden size-10.5"
              aria-label="Open navigation"
            >
              <HamburgerMenuIcon aria-hidden="true" className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent
            aria-describedby={undefined}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              sentinelRef.current?.focus();
            }}
          >
            <DialogTitle className="sr-only">Navigation</DialogTitle>
            <span ref={sentinelRef} tabIndex={-1} className="sr-only" />
            <nav className="flex flex-col w-full gap-2">
              <DialogClose asChild>
                <a
                  href="#"
                  aria-label="Justin Paige — scroll to top"
                  className="flex flex-col items-center gap-3 rounded-lg"
                >
                  <div
                    aria-hidden="true"
                    className="relative w-16 h-16 rounded-full ring-2 ring-white/12 ring-offset-2 ring-offset-[#07070b] bg-[rgba(124,92,255,0.25)] flex items-center justify-center overflow-hidden shrink-0"
                  >
                    <span className="text-white/80 font-semibold text-sm select-none">
                      JP
                    </span>
                    <img
                      src={avatarImg}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-bold tracking-[0.2px] text-[15px] text-white/90"
                  >
                    Justin Paige
                  </span>
                </a>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-center"
                  asChild
                >
                  <a href="#about">About</a>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-center"
                  asChild
                >
                  <a href="#experience">Experience</a>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="accent"
                  className="w-full justify-center"
                  asChild
                >
                  <a href="#contact">Contact</a>
                </Button>
              </DialogClose>
              <div className="flex">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-center"
                    asChild
                  >
                    <a href={linkedin} target="_blank" rel="noreferrer">
                      <LinkedInLogoIcon
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                      />
                      LinkedIn
                    </a>
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-center"
                    asChild
                  >
                    <a
                      href={`mailto:${import.meta.env.VITE_CONTACT_TO_EMAIL}?subject=${encodeURIComponent('Hey Justin')}`}
                    >
                      <EnvelopeClosedIcon
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                      />
                      Email
                    </a>
                  </Button>
                </DialogClose>
              </div>
            </nav>
          </DialogContent>
        </Dialog>
      </header>

      <main id="top">
        <Outlet />
      </main>
    </div>
  );
}
