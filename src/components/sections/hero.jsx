import Image from "next/image";
import HeroLarge from "/public/heroLarge.jpg";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="hidden sm:block">
        <Image
          src={HeroLarge}
          className="object-cover brightness-75 z-10"
          fill
          alt="Background Image"
          priority
          role="img"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] to-transparent opacity-70 md:p-10 md:pt-20 z-10" role="presentation"
          style={{
            background:
              "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.5) 30%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-start justify-center min-h-screen px-7 lg:px-10 xl:px-14 2xl:px-24 ">
        <h1
          className=" sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl darkColor text-wrap dm-sans mb-2"
          style={{ "--font-weight": "600" }}
        >
          Your, plumbing <br /> service
        </h1>
        <p
          className=" sm:text-lg md:text-xl lg:text-2xl darkColor poppins pl-1"
          style={{ "--font-weight": "600" }}
        >
          Serving Kelowna since 2016
        </p>
        <div
          className="flex space-x-4 mt-6 poppins"
          style={{ "--font-weight": "600" }}
        >
          <button
            aria-label="Book a plumbing service"
            className="blueColorBg text-white py-2 px-8 rounded-full poppins shadow-lg md:px-12 md:py-2 lg:text-lg lg:px-14 xl:text-xl xl:py-3"
            style={{ "--font-weight": "600" }}
          >
            Book <span className="hidden md:inline">online</span> now
          </button>
        </div>
      </div>
    </div>
  );
}
