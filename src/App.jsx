function App() {
  return (
    <div className="crt relative min-h-screen overflow-hidden bg-black text-white">

      {/* Noise */}
      <div className="noise" />

      {/* Grid */}
      <div className="system-grid absolute inset-0 opacity-50" />

      {/* Red ambient light */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-red-700/10
          blur-[140px]
        "
      />

      {/* Navbar */}

      <header
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-5
          md:px-12
        "
      >

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 animate-pulse rounded-full bg-red-600" />

          <span
            className="
              text-xs
              font-bold
              tracking-[0.3em]
              text-red-500
            "
          >
            FSOCIETY
          </span>

        </div>

        <div
          className="
            hidden
            items-center
            gap-8
            text-[10px]
            tracking-[0.2em]
            text-zinc-500
            md:flex
          "
        >

          <span>STATUS: ONLINE</span>

          <span>ACCESS: ANONYMOUS</span>

          <span className="text-red-600">
            ● LIVE
          </span>

        </div>

      </header>

      {/* Hero */}

      <main
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-74px)]
          items-center
          px-6
          md:px-12
        "
      >

        <div className="mx-auto w-full max-w-7xl">

          {/* terminal line */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
              text-xs
              text-zinc-600
            "
          >

            <span className="text-red-600">
              root@fsociety
            </span>

            <span>:</span>

            <span>~$</span>

            <span className="text-zinc-400">
              ./init_anonymous.sh
            </span>

            <span className="cursor h-4 w-[6px] bg-red-600" />

          </div>

          {/* Main heading */}

          <h1
            className="
              glitch
              red-glow
              max-w-5xl
              text-6xl
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.06em]
              text-red-600
              sm:text-7xl
              md:text-8xl
              lg:text-[120px]
            "
            data-text="HELLO, FRIEND."
          >
            HELLO,
            <br />
            FRIEND.
          </h1>

          {/* quote */}

          <p
            className="
              mt-10
              max-w-xl
              border-l
              border-red-700
              pl-5
              text-sm
              leading-7
              text-zinc-500
              md:text-base
            "
          >
            The world is a system.
            <br />

            <span className="text-zinc-300">
              Systems can be rewritten.
            </span>
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              className="
                border
                border-red-700
                bg-red-700
                px-7
                py-3
                text-xs
                font-bold
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-red-500
                hover:shadow-[0_0_30px_rgba(185,28,28,0.25)]
              "
            >
              ENTER THE SYSTEM
            </button>

            <button
              className="
                border
                border-white/15
                px-7
                py-3
                text-xs
                tracking-[0.2em]
                text-zinc-500
                transition
                hover:border-white/30
                hover:text-white
              "
            >
              WHO AM I?
            </button>

          </div>

          {/* bottom information */}

          <div
            className="
              mt-20
              flex
              max-w-xl
              items-center
              gap-4
              text-[10px]
              tracking-[0.2em]
              text-zinc-700
            "
          >

            <span>MR.ROBOT_VIBE</span>

            <div className="h-px flex-1 bg-white/10" />

            <span>01</span>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;