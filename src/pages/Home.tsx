import { useState } from 'react';
import { LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Section } from '../components/Section';
import { Timeline } from '../components/Timeline';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { PerformanceLine } from '@/components/PerformanceLine';

const linkedin = 'https://www.linkedin.com/in/justin-paige/';

const inputBase =
  'rounded-xl border border-white/12 bg-black/18 text-white/90 px-2.5 py-2.5 text-sm outline-none focus:border-[rgba(124,92,255,0.55)] focus:shadow-[0_0_0_3px_rgba(124,92,255,0.16)]';

export function Home() {
  const [dialog, setDialog] = useState<{ open: boolean; success: boolean }>({
    open: false,
    success: false,
  });
  const contactEmail = import.meta.env.VITE_CONTACT_TO_EMAIL;
  const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Hey Justin')}`;

  return (
    <>
      {/* ── Hero ── */}
      <header className="max-w-280 mx-auto px-5 pt-14 pb-4.5 grid grid-cols-[1.45fr_0.85fr] gap-4.5 relative max-[960px]:grid-cols-1 max-[960px]:pt-9.5">
        <div
          className="absolute -inset-0.5 rounded-[28px] pointer-events-none opacity-90 mask-[radial-gradient(closest-side,rgba(0,0,0,0.9),transparent_70%)]"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(124, 92, 255, 0.22), transparent 60%),
              radial-gradient(circle at 85% 10%, rgba(45, 226, 230, 0.14), transparent 55%),
              linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: 'auto, auto, 56px 56px, 56px 56px',
          }}
          aria-hidden
        />

        <div className="relative py-1.5">
          <p className="text-white/75 text-xs tracking-[0.18em] uppercase m-0 mb-3.5">
            Senior Software Engineer • Frontend Systems • Platform Integration
          </p>

          {/* Note: if you update this headline, also update public/social.svg */}
          <h1 className="text-[clamp(30px,3.2vw,46px)] leading-[1.05] m-0 mb-3.5 tracking-[-0.02em]">
            Justin Paige—Founding engineer at Railbird Exchange, acquired by
            DraftKings. Now building the platform that brings it all together.
          </h1>

          <p className="text-white/74 m-0 mb-4.5 text-[15px] leading-[1.6]">
            I’ve built from scratch in high-stakes environments like regulated
            markets and live trading, and contributed to large, established
            systems where performance and reliability are non-negotiable. That
            range shapes how I think about software: the interfaces that feel
            solid, the data layers that stay clean, and the systems that hold up
            when it counts.
          </p>
          <ul
            aria-label="Core technologies"
            className="flex flex-wrap gap-2 mt-3 list-none p-0 m-0"
          >
            {[
              'TypeScript',
              'React',
              'SvelteKit',
              'Node.js',
              'PostgreSQL',
              'NestJS',
              'Storybook',
              'D3',
            ].map((t) => (
              <li
                key={t}
                className="px-2.5 py-1.75 rounded-full border border-white/12 bg-white/3 text-white/74 text-xs"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-end items-start max-[960px]:justify-center">
          <div className="w-full max-w-105 rounded-[26px] p-px bg-linear-to-br from-[rgba(124,92,255,0.55)] via-[rgba(45,226,230,0.25)] to-[rgba(255,255,255,0.06)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
            <div className="rounded-[25px] bg-[rgba(8,8,12,0.65)] border border-white/8 backdrop-blur-[14px] p-4 relative overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center px-2.5 py-1.5 rounded-full border border-white/12 bg-white/4 text-xs text-white/82">
                  Now
                </div>
                <div className="font-mono text-white/60 text-xs">
                  DraftKings • NYC
                </div>
              </div>

              <div className="mt-3.5 grid gap-2.5">
                <div className="p-3 rounded-2xl bg-white/4 border border-white/10">
                  <div className="font-extrabold text-base">
                    Platform Integration
                  </div>
                  <div className="text-white/68 text-xs mt-1">
                    Railbird Exchange → DraftKings
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/4 border border-white/10">
                  <div className="font-extrabold text-base">
                    Frontend Systems
                  </div>
                  <div className="text-white/68 text-xs mt-1">
                    React, SvelteKit, UI infrastructure
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/4 border border-white/10">
                  <div className="font-extrabold text-base">Full Stack</div>
                  <div className="text-white/68 text-xs mt-1">
                    APIs, data mapping, operational alignment
                  </div>
                </div>
              </div>

              <div className="flex gap-2.5 flex-wrap mt-3.5">
                <Button variant="ghost" size="sm" asChild>
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <LinkedInLogoIcon
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                    />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={contactHref}>
                    <EnvelopeClosedIcon
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                    />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── About ── */}
      <Section id="about" title="How I Got Here">
        <div className="text-white/72 leading-[1.7] text-[14.5px]">
          <div className="hidden min-[961px]:float-right min-[961px]:ml-5 min-[961px]:mb-3 min-[961px]:block min-[961px]:w-96">
            <PerformanceLine height={340} className="w-full" />
          </div>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            I started my engineering journey studying Mechanical Engineering at
            the <strong>University of Southern California</strong>. I’d always
            been interested in systems, design, and the artistic process of
            building things, but it didn’t fully click that software was my
            niche until the end of college.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            In high school I channeled that energy through the engineering
            magnet program at my school and through music. I studied and
            practiced mixing, started DJing events, including a regular gig at
            my local trampoline park, and ended up doing that professionally
            through much of college. It was a weird mix of creativity,
            engineering, and figuring things out as I went. I also spent plenty
            of time playing video games and tinkering with computers, but I
            wasn’t writing much code yet.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            Once I got to USC it felt like opportunities were everywhere. I
            spent some time working with the <strong>USC Racing team</strong>,
            using <strong>CATIA</strong> to design components for our mini-F1
            combustion vehicle. It was exciting to take real-world testing
            feedback and turn it into new designs, but something still felt
            slightly off. I enjoyed Mechanical Engineering, but I enjoyed my
            programming classes more—so I added a{' '}
            <strong>Computer Programming minor</strong>.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            My first real software opportunity came when a friend raised funding
            to build a decentralized social media platform called{' '}
            <strong>Kwil</strong>. I learned <strong>React</strong>,{' '}
            <strong>Node</strong>, and <strong>JavaScript</strong> while working
            on the project through the end of my junior year and into my senior
            year. At that point I knew I wanted to pursue software seriously.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            Around that time Kwil moved its team to Austin while I stayed in
            Southern California. That gave me the chance to double down on my
            fundamentals through <strong>Codesmith</strong>, where I focused on
            developing a more professional engineering workflow.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            While I was there I discovered <strong>Svelte</strong>, and near the
            end of the program I started working on an open-source devtool with
            a few engineers I met there.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            The project, <strong>Canopy</strong>, ended up getting some traction
            in the community, but after a few months I needed to find full-time
            work. That search ultimately led me to a new{' '}
            <strong>event contracts startup</strong> backed by{' '}
            <strong>Y Combinator—Railbird Exchange</strong>.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            At <strong>Railbird</strong>, I spent several years helping build
            the platform from the ground up: frontends, APIs, and the internal
            systems needed to operate in a regulated environment while pursuing
            approval from the <strong>CFTC</strong>. When I first started
            working there I remember trying to explain{' '}
            <strong>event contracts</strong> to people and almost no one had
            heard of them. Watching that industry grow—and getting to contribute
            to it through my work—has been an incredible experience.
          </p>

          <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
            Railbird was eventually acquired by <strong>DraftKings</strong>,
            where I now work as a <strong>Senior Software Engineer</strong>{' '}
            helping scale, monitor, and develop the <strong>DK Predict</strong>{' '}
            platform.
          </p>

          <p className="m-0 text-white/72 leading-[1.7] text-[14.5px]">
            Today my work focuses on designing frontend systems, integrating
            complex APIs, and making sure data flows cleanly between services
            and the UI. I care a lot about the details that make software feel
            solid—performance, consistency, and systems that hold up under real
            usage.
          </p>

          <p className="m-0 mt-3 text-white/72 leading-[1.7] text-[14.5px]">
            Lately I’ve also been experimenting with AI-assisted development
            workflows, exploring how these tools can speed up engineering while
            still keeping systems understandable and maintainable.
          </p>

          <div className="clear-both" />

          <div className="mt-4 min-[961px]:hidden">
            <PerformanceLine height={320} className="w-full" />
          </div>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" title="Experience">
        <Timeline
          items={[
            {
              period: 'Oct 2025 – Present',
              title: 'Senior Software Engineer',
              org: 'DraftKings',
              bullets: [
                'Integrating the DK Predict platform following the Railbird acquisition.',
                'Building production-critical React components and shared frontend infrastructure.',
                'Designing serialization and data-mapping layers between backend services and UI systems.',
                'Investigating production issues and contributing architectural improvements that support operational scale.',
              ],
              tech: ['React', 'TypeScript', 'Platform Integration'],
            },
            {
              period: 'Apr 2023 – Oct 2025',
              title: 'Founding Software Engineer',
              org: 'Railbird',
              bullets: [
                'Built the consumer platform and internal control panel from the ground up.',
                'Developed frontend systems including animated modules, dynamic data tables, and charting with D3.',
                'Worked closely with product and design to turn complex trading workflows into intuitive interfaces.',
                'Implemented analytics instrumentation to measure user behavior and guide product decisions.',
              ],
              tech: ['SvelteKit', 'Storybook', 'D3', 'Amplitude', 'NestJS'],
            },
            {
              period: 'Jul 2022 – Apr 2023',
              title: 'Software Engineer',
              org: 'Canopy (Open Source)',
              bullets: [
                'Built a Chrome Manifest V3 developer tool for Svelte with time-travel debugging and component visualization.',
                'Designed the extension messaging architecture to reliably capture application state.',
                'Used TypeScript to improve reliability and maintainability across the codebase.',
              ],
              tech: ['Svelte', 'TypeScript', 'Chrome MV3'],
            },
            {
              period: 'Jun 2021 – Mar 2022',
              title: 'Software Engineer',
              org: 'Kwil',
              bullets: [
                'Developed reusable React components for a scalable social platform.',
                'Built Node.js integrations for decentralized storage systems.',
                'Refactored legacy code to improve modularity, testability, and maintainability.',
              ],
              tech: ['React', 'Node.js', 'Jest'],
            },
          ]}
        />
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-2 gap-3.5 max-[960px]:grid-cols-1">
          <div>
            <h3 className="m-0 mb-2.5 text-2xl">Say hello.</h3>
            <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
              Interested in collaborating or discussing opportunities? Reach out
              directly.
            </p>

            <div className="flex gap-2.5 flex-wrap mt-3.5">
              <Button asChild>
                <a href={contactHref}>
                  <EnvelopeClosedIcon
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                  />
                  Email
                </a>
              </Button>
              <Button asChild>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                  />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <form
            className="rounded-[18px] border border-white/10 bg-white/4 p-3.5"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);

              const payload = {
                name: String(fd.get('name') ?? ''),
                from: String(fd.get('from') ?? ''),
                message: String(fd.get('message') ?? ''),
                website: String(fd.get('website') ?? ''),
              };

              const r = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });

              const data = await r.json().catch(() => null);

              if (!r.ok) {
                console.error('Send failed:', r.status, data);
                setDialog({ open: true, success: false });
                return;
              }

              form.reset();
              setDialog({ open: true, success: true });
            }}
          >
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <label className="flex flex-col gap-1.5 mb-2.5 text-white/72 text-xs">
              <span>Name</span>
              <input
                name="name"
                placeholder="Your name"
                required
                className={inputBase}
              />
            </label>

            <label className="flex flex-col gap-1.5 mb-2.5 text-white/72 text-xs">
              <span>Email</span>
              <input
                name="from"
                type="email"
                placeholder="you@example.com"
                required
                className={inputBase}
              />
            </label>

            <label className="flex flex-col gap-1.5 mb-2.5 text-white/72 text-xs">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className={inputBase}
              />
            </label>

            <Button variant="accent" type="submit">
              Send
            </Button>
          </form>
        </div>
      </Section>

      <Dialog
        open={dialog.open}
        onOpenChange={(open) => setDialog((d) => ({ ...d, open }))}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialog.success ? 'Message sent!' : 'Something went wrong'}
            </DialogTitle>
            <DialogDescription>
              {dialog.success
                ? "Thanks for reaching out — I'll get back to you soon."
                : `Your message couldn't be sent. Please try again or email me directly at ${contactEmail}.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="accent">Got it</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <footer className="py-8 pb-12.5 px-5 border-t border-white/8 bg-black/14">
        <div className="max-w-280 mx-auto flex gap-2.5 items-center justify-center text-white/65 text-xs">
          <span className="text-center">
            © {new Date().getFullYear()} Justin Paige
          </span>
          <span className="opacity-35">•</span>
          <span className="font-mono text-center">All Rights Reserved</span>
        </div>
      </footer>
    </>
  );
}
