/*
Next.js + Tailwind — Professional Gaming Homepage (White background, Black/Dark Blue accents)
*/

import React from "react"

export const metadata = {
  title: "PlayTheFuture — Online Games",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Navbar */}
        <header className="flex items-center justify-between py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-700">🎮 PTF</span>
            <span className="font-semibold text-lg">PlayTheFuture</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#categories" className="hover:text-blue-700">Categories</a>
            <a href="#featured" className="hover:text-blue-700">Featured</a>
            <a href="#community" className="hover:text-blue-700">Community</a>
            <a href="#about" className="hover:text-blue-700">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold shadow hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </header>

        {/* Hero */}
        <main className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <section className="space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Play the <span className="text-blue-700">Future</span> of Online Games
            </h1>
            <p className="text-gray-600 text-lg">
              Sports, Horror, Fantasy, and more — all in one professional, secure,
              and fast platform. Built for competitive play and casual fun.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#featured"
                className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800"
              >
                Play Now
              </a>
              <a
                href="#categories"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100"
              >
                Explore Games
              </a>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <div className="w-full max-w-md h-64 flex items-center justify-center border border-gray-200 rounded-xl bg-gray-50">
              <span className="text-blue-700 text-lg font-semibold">[ Gamer Illustration ]</span>
            </div>
          </section>
        </main>

        {/* Categories */}
        <section id="categories" className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Game Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard title="Sports Games" desc="Football, Basketball, Racing" />
            <CategoryCard title="Ghost Games" desc="Horror & Survival" />
            <CategoryCard title="Fantasy" desc="RPGs & Adventures" />
            <CategoryCard title="Puzzle & Strategy" desc="Logic & Tactics" />
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Featured Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeaturedCard title="Galactic Warriors" subtitle="PvP Space Shooter" />
            <FeaturedCard title="Splatter" subtitle="Survival Horror" />
            <FeaturedCard title="Dungeon Quest" subtitle="Action RPG" />
          </div>
        </section>

        {/* Community */}
        <section
          id="community"
          className="mt-20 rounded-xl p-8 bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Join 1M+ Gamers Worldwide
            </h3>
            <p className="text-gray-600 text-sm">
              Compete in tournaments, climb leaderboards, and join seasonal events.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800">
              See Tournaments
            </a>
            <a className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100">
              Community Hub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-8 pb-6 text-gray-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-lg text-gray-900">PlayTheFuture</div>
              <div className="text-sm mt-1">
                © {new Date().getFullYear()} PlayTheFuture Ltd. All rights reserved.
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function CategoryCard({ title, desc }) {
  return (
    <div className="rounded-lg p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-md">
        {title.charAt(0)}
      </div>
      <div className="mt-3">
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  )
}

function FeaturedCard({ title, subtitle }) {
  return (
    <div className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="h-32 rounded-md bg-gray-50 flex items-end p-4">
        <div>
          <div className="font-semibold text-lg text-gray-900">{title}</div>
          <div className="text-sm text-gray-600">{subtitle}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Top pick</div>
        <button className="px-3 py-1 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800">
          Play
        </button>
      </div>
    </div>
  )
}
