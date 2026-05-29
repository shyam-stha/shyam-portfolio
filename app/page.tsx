import { LeftPanel } from "../components/LeftPanel";
import { RightPanel } from "../components/RightPanel";
import { ThemeToggle } from "../components/ThemeToggle";
import { CursorLight } from "../components/CursorLight";

export default function Home() {
  return (
    <main className="relative min-h-screen lg:h-screen lg:overflow-hidden selection:bg-accent/30 selection:text-primary">
      <CursorLight />
      <ThemeToggle />

      <div className="mx-auto min-h-screen lg:h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:h-screen">
          {/* Left Column — Fixed on Desktop, never scrolls */}
          <div className="w-full lg:w-[45%] lg:h-screen lg:flex lg:flex-col lg:justify-between lg:overflow-hidden lg:pr-12 relative z-10">
            <LeftPanel />
          </div>

          {/* Right Column — Panel viewport on Desktop */}
          <div className="w-full lg:w-[55%] lg:h-screen relative z-10">
            <RightPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
