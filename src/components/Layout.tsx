import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Layout() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-20 px-5 py-4.5 flex justify-between items-center gap-3 bg-linear-to-b from-[rgba(7,7,11,0.72)] to-[rgba(7,7,11,0.35)] backdrop-blur-md border-b border-white/8">
        <a
          className="flex items-center gap-3.5 font-bold tracking-[0.2px]"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/favicon.svg" className="w-7 h-7" alt="JP logo" />
          <span className="text-[14px]">Justin Paige</span>
        </a>

        <nav className="flex gap-1.5 items-center text-[13px]">
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
      </div>

      <main id="top">
        <Outlet />
      </main>
    </div>
  );
}
