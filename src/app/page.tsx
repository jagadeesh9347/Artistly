import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{
        backgroundImage: `url('https://unirav.com/wp-content/uploads/2023/12/event-planner.jpg')`,
      }}
    >
      <div className="min-h-screen  flex items-center justify-center">
        <section className="max-w-4xl mx-auto text-center text-white px-4 py-10">
          <h1 className="text-5xl font-extrabold mb-4">
            🎭 Welcome to <span className="text-blue-300">Artistly</span>
          </h1>
          <p className="text-xl mb-10">
            A platform where Event Planners meet Performing Artists.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/artists"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              🎤 Browse Artists
            </Link>
            <Link
              href="/onboard"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              ➕ Onboard Artist
            </Link>
            <Link
              href="/dashboard"
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              📊 Manager Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
              <div
                key={category}
                className="bg-white/10 p-6 rounded-xl text-blue-100 font-semibold shadow hover:shadow-xl backdrop-blur-lg transition border border-white/20"
              >
                {category}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
