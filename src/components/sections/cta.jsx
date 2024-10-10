export default function Cta() {
  return (
    <div className="w-full h-44 lg:h-60 mediumGrayBg">
      <div className="grid grid-cols-2 gap-3 items-center max-w-[900px] md:max-w-[1200px] lg:max-w-[1600px] h-full mx-auto">
        <div className="flex justify-center ">
          <h3
            className="darkColor dm-sans text-3xl sm:text-4xl md:text-4xl lg:text-6xl"
            style={{ "--font-weight": "700" }}
          >
            What are you <br /> waiting for?
          </h3>
        </div>
        <div className="flex flex-col gap-5 max-w-[250px] mx-auto">
          <button
            aria-label="FAQ"
            className="bg-transparent border-2 button-border darkColor py-2 px-11 rounded-full poppins shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl md:px-16"
            style={{ "--font-weight": "600" }}
          >
            Faq
          </button>
          <button
            aria-label="Contact"
            className="darkColorBg text-white py-2.5 px-11 rounded-full poppins shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl md:px-16"
            style={{ "--font-weight": "600" }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
