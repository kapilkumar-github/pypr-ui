import { AppLogo } from "@/components/app-ui/app-logo";
import LandingPageBackground from "@/features/home/landing-page-bg";

export default function Home() {
  return (

    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100 flex flex-col">
      <LandingPageBackground />
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open source resume builder
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Your career.
              <br />
              <span className="text-zinc-500">
                Beautifully documented.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Build a professional resume that looks as good as the work
              behind it. Open source, modern, and designed to help your
              experience stand out.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/signup"
                className="
                  flex h-12 items-center justify-center
                  rounded-lg bg-white px-6
                  text-sm font-medium text-black
                  transition-all duration-200
                  hover:bg-white/90
                  hover:shadow-[0_0_28px_rgba(99,102,241,0.35)]
                "
              >
                Build your resume
                <span className="ml-2">→</span>
              </a>

              <a
                href="https://github.com/kapilkumar-github/pypr-ui"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 items-center justify-center
                  rounded-lg border border-white/[0.1]
                  bg-white/[0.03] px-6
                  text-sm font-medium text-zinc-200
                  transition
                  hover:bg-white/[0.07]
                  hover:text-white
                "
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative ml-auto h-[520px] w-full max-w-[560px]">
            {/* Ambient glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl" />

            {/* Decorative ring */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

            {/* Floating document */}
            <div className="absolute left-[12%] top-[8%] w-[280px] rotate-[-7deg] transition-transform duration-700 hover:rotate-[-3deg] sm:w-[310px]">
              <div
                className="
                  relative aspect-[8.5/11]
                  rounded-lg
                  border border-zinc-300/60
                  bg-zinc-200
                  p-7
                  shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                "
              >
                {/* Resume header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="h-5 w-32 rounded bg-zinc-900" />

                    <div className="mt-2 h-2 w-24 rounded bg-zinc-400" />
                  </div>

                  <div className="h-10 w-10 rounded-full bg-zinc-300" />
                </div>

                {/* Summary */}
                <div className="mt-8">
                  <div className="mb-3 h-2 w-20 rounded bg-zinc-900" />

                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded bg-zinc-300" />
                    <div className="h-1.5 w-[92%] rounded bg-zinc-300" />
                    <div className="h-1.5 w-[78%] rounded bg-zinc-300" />
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-8">
                  <div className="mb-4 h-2 w-24 rounded bg-zinc-900" />

                  <div className="mb-5">
                    <div className="flex justify-between">
                      <div className="h-2 w-28 rounded bg-zinc-400" />
                      <div className="h-1.5 w-14 rounded bg-zinc-300" />
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-zinc-300" />
                      <div className="h-1.5 w-[88%] rounded bg-zinc-300" />
                      <div className="h-1.5 w-[75%] rounded bg-zinc-300" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <div className="h-2 w-24 rounded bg-zinc-400" />
                      <div className="h-1.5 w-14 rounded bg-zinc-300" />
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-zinc-300" />
                      <div className="h-1.5 w-[82%] rounded bg-zinc-300" />
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <div className="mb-3 h-2 w-16 rounded bg-zinc-900" />

                  <div className="flex flex-wrap gap-2">
                    <div className="h-5 w-14 rounded bg-zinc-300" />
                    <div className="h-5 w-16 rounded bg-zinc-300" />
                    <div className="h-5 w-12 rounded bg-zinc-300" />
                    <div className="h-5 w-20 rounded bg-zinc-300" />
                  </div>
                </div>

                {/* Subtle accent */}
                <div className="absolute bottom-7 right-7 h-1 w-12 rounded-full bg-primary/70" />
              </div>

              {/* Paper shadow */}
              <div className="absolute -bottom-3 left-4 -z-10 h-full w-full rounded-lg bg-white/[0.035]" />
            </div>

            {/* Floating pen */}
            <div className="pen-float absolute bottom-[14%] right-[7%] z-20">
              <div className="rotate-[40deg]">
                <div className="relative h-6 w-44 rounded-full bg-zinc-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  {/* Pen body */}
                  <div className="absolute inset-y-0 left-8 right-8 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-400" />

                  {/* Grip */}
                  <div className="absolute left-7 top-1/2 h-4 w-10 -translate-y-1/2 rounded-full bg-zinc-500/70" />

                  {/* Clip */}
                  <div className="absolute right-10 -top-2 h-8 w-1.5 rounded-full bg-zinc-400" />

                  {/* Tip */}
                  <div className="absolute -left-5 top-1/2 -translate-y-1/2 border-b-[12px] border-r-[20px] border-t-[12px] border-b-transparent border-r-zinc-400 border-t-transparent" />

                  {/* Tip point */}
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2 border-b-[3px] border-r-[7px] border-t-[3px] border-b-transparent border-r-zinc-700 border-t-transparent" />

                  {/* End */}
                  <div className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-zinc-500" />
                </div>
              </div>
            </div>

            {/* Small floating paper */}
            <div className="absolute bottom-[12%] left-[5%] h-24 w-20 rotate-[18deg] rounded-md border border-white/[0.08] bg-white/[0.035] shadow-2xl" />

            {/* Small geometric square */}
            <div className="absolute right-[5%] top-[15%] h-12 w-12 rotate-12 rounded-lg border border-primary/[0.18] bg-primary/[0.03]" />

            {/* Floating dot */}
            <div className="absolute bottom-[28%] right-[25%] h-2 w-2 rounded-full bg-primary/50" />
          </div>
        </div>
      </section>
    </main>
  );
}