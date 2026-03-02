import { useState } from "react";
import { LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const linkedin = "https://www.linkedin.com/in/justin-paige/";

const inputBase =
  "rounded-xl border border-white/12 bg-black/18 text-white/90 px-2.5 py-2.5 text-sm outline-none focus:border-[rgba(124,92,255,0.55)] focus:shadow-[0_0_0_3px_rgba(124,92,255,0.16)]";

export function Home() {
  const [dialog, setDialog] = useState<{ open: boolean; success: boolean }>({
    open: false,
    success: false,
  });
  const contactEmail = import.meta.env.VITE_CONTACT_TO_EMAIL;
  const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Hey Justin")}`;

  return (
    <>
      {/* ── Hero ── */}
      <header className="max-w-280 mx-auto px-5 pt-14 pb-4.5 grid grid-cols-[1.35fr_0.95fr] gap-4.5 relative max-[960px]:grid-cols-1 max-[960px]:pt-9.5">
        <div
          className="absolute -inset-0.5 rounded-[28px] pointer-events-none opacity-90 mask-[radial-gradient(closest-side,rgba(0,0,0,0.9),transparent_70%)]"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(124, 92, 255, 0.22), transparent 60%),
              radial-gradient(circle at 85% 10%, rgba(45, 226, 230, 0.14), transparent 55%),
              linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "auto, auto, 56px 56px, 56px 56px",
          }}
          aria-hidden
        />

        <div className="relative py-1.5">
          <p className="text-white/75 text-xs tracking-[0.18em] uppercase m-0 mb-3.5">
            Senior Software Engineer • React • SvelteKit • TypeScript
          </p>

          <h1 className="text-[clamp(30px,3.2vw,52px)] leading-[1.05] m-0 mb-3.5 tracking-[-0.02em]">
            Building responsive, scalable systems across the full stack.
          </h1>

          <p className="text-white/74 m-0 mb-4.5 text-[15px] leading-[1.6]">
            At DraftKings, I contribute as a Senior Software Engineer
            integrating the Railbird Exchange infrastructure after our
            acquisition. As a founding engineer at Railbird, I was a core
            contributor to the platform&apos;s full stack development,
            collaborating with UX/UI teams and integrating APIs for seamless
            functionality.
          </p>
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
                    <LinkedInLogoIcon className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={contactHref}>
                    <EnvelopeClosedIcon className="w-3.5 h-3.5" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── About ── */}
      <Section id="about" title="About">
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-4.5 max-[960px]:grid-cols-1">
          <div>
            <h3 className="m-0 mb-2.5 text-2xl">Background</h3>
            <p className="m-0 mb-3 text-white/72 leading-[1.7] text-[14.5px]">
              A graduate of the University of Southern California with a
              Bachelor of Science in Mechanical Engineering and a minor in
              Computer Programming, I bring a structured approach to software
              development. My work reflects a commitment to building responsive,
              scalable solutions while fostering alignment across engineering
              and operations teams.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "TypeScript",
                "React",
                "SvelteKit",
                "Node.js",
                "PostgreSQL",
                "NestJS",
                "Storybook",
                "D3",
              ].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1.75 rounded-full border border-white/12 bg-white/3 text-white/74 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/4 p-4">
            <div className="text-[44px] opacity-35 leading-none">"</div>
            <p className="m-0 -mt-2.5 mb-3 text-[15px] leading-[1.6] text-white/82">
              I focus on building performant, reliable systems while keeping
              engineering decisions aligned with product and operational needs.
            </p>
            <div className="text-white/60 text-xs">Justin Paige</div>
          </div>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" title="Experience">
        <Timeline
          items={[
            {
              period: "Oct 2025 – Present",
              title: "Senior Software Engineer",
              org: "DraftKings",
              bullets: [
                "Integrating Railbird Exchange infrastructure following acquisition.",
                "Building production-critical React components and frontend infrastructure.",
                "Designing serialization and data-mapping layers between backend services and UI systems.",
                "Contributing to system investigations and architectural improvements to support operational efficiency.",
              ],
              tech: ["React", "TypeScript", "Platform Integration"],
            },
            {
              period: "Apr 2023 – Oct 2025",
              title: "Founding Engineer / Software Engineer",
              org: "Railbird",
              bullets: [
                "Built multiple frontends from scratch using SvelteKit, including consumer platform and internal control panel.",
                "Developed advanced UI components including animated modules, dynamic data tables, and charting with D3.",
                "Collaborated with UX/UI teams and integrated APIs for seamless product functionality.",
                "Implemented analytics instrumentation to measure user behavior and inform product decisions.",
              ],
              tech: ["SvelteKit", "Storybook", "D3", "Amplitude", "NestJS"],
            },
            {
              period: "Jul 2022 – Apr 2023",
              title: "Engineer",
              org: "Canopy (Open Source)",
              bullets: [
                "Built a Chrome Manifest V3 developer tool for Svelte enabling time-travel debugging and component visualization.",
                "Implemented extension messaging architecture for reliable state capture.",
                "Used TypeScript to enforce type safety and maintainability.",
              ],
              tech: ["Svelte", "TypeScript", "Chrome MV3"],
            },
            {
              period: "Jun 2021 – Mar 2022",
              title: "Software Engineer",
              org: "Kwil",
              bullets: [
                "Developed reusable React components for a scalable social platform.",
                "Built Node.js backend integrations for decentralized storage systems.",
                "Refactored legacy codebases for modularity and testability; added Jest testing.",
              ],
              tech: ["React", "Node.js", "Jest"],
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
              Interested in collaborating or discussing opportunities. Reach out
              directly.
            </p>

            <div className="flex gap-2.5 flex-wrap mt-3.5">
              <Button asChild>
                <a href={contactHref}>
                  <EnvelopeClosedIcon className="w-3.5 h-3.5" />
                  Email
                </a>
              </Button>
              <Button asChild>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon className="w-3.5 h-3.5" />
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
                name: String(fd.get("name") ?? ""),
                from: String(fd.get("from") ?? ""),
                message: String(fd.get("message") ?? ""),
                website: String(fd.get("website") ?? ""),
              };

              const r = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              const data = await r.json().catch(() => null);

              if (!r.ok) {
                console.error("Send failed:", r.status, data);
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
              {dialog.success ? "Message sent!" : "Something went wrong"}
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
          <span>© {new Date().getFullYear()} Justin Paige</span>
          <span className="opacity-35">•</span>
          <span className="font-mono">All Rights Reserved</span>
        </div>
      </footer>
    </>
  );
}
