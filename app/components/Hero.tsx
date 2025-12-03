"use client";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">

      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-red-900/20 animate-pulse blur-3xl"></div>

      <div className="relative z-10 backdrop-blur-lg bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Mehtab Akbar</h1>

        <h2 className="text-xl text-gray-300 mb-6">
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Web Developer",
                "AI Enthusiast",
                "Next.js Developer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <a
          href="#projects"
          className="px-8 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 transition-all rounded-full shadow-lg hover:shadow-red-600/50 text-white"
        >
          View My Work →
        </a>
      </div>
    </section>
  );
}
