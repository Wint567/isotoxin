import { Link } from "react-router-dom";

export default function Notice() {
  return (
    <div className="w-full max-w-[768px] mx-auto text-center flex flex-col items-center px-4">
      <div className="w-full pl-7 lg:pl-0 flex justify-start lg:justify-center items-center gap-[50px] mt-[44px] lg:mt-[74px]">
        <button
          type="button"
          className="lg:hidden p-2 -ml-2 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <img
          src="/logo.png"
          alt="ISOTOXIN"
          className="select-none"
          draggable={false}
        />
      </div>

      <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1.6] uppercase text-center mt-[210px] lg:mt-[372px]">
        Title placeholder for message
      </h2>

      <p className="mt-6 font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
        Subtitle placeholder
      </p>

      <Link
        to="/"
        className="
          inline-flex items-center justify-center
          w-[370px] h-[60px] mt-[60px] rounded-[100px]
          bg-[var(--blue)] text-white cursor-pointer
          font-medium text-[16px] leading-[1]
          hover:bg-[var(--hover-blue)] transition-colors
        "
      >
        Back To Home
      </Link>
    </div>
  );
}
