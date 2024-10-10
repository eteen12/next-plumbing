export default function Cta() {
  return (
    <div className="grid grid-cols-2 w-full h-36 mediumGrayBg">
      <div>
        <h3 className="" >What are you waiting for?</h3>
      </div>
      <div>
        <div>
          <button
            aria-label="Book a plumbing service"
            className="blueColorBg text-white py-2 px-12 rounded-full poppins shadow-lg text-base"
            style={{ "--font-weight": "600" }}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
