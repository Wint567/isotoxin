import { useState } from "react";
import { Link } from "react-router-dom";

export default function BigHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full max-w-[1646px] mx-auto mt-0 lg:mt-10 pt-[21px] lg:pt-[47px] px-4
        bg-[url('/bg-header-phone.png')] lg:bg-[url('/bg-header.png')]
        bg-no-repeat bg-center bg-cover lg:bg-auto">
      <div
        className="
          w-full max-w-[1250px] mx-auto bg-[var(--color-bg)]
          rounded-[100px]
          px-7 py-[24px]
          flex justify-between items-center
        "
      >
        <div className="flex items-center gap-[50px]">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden grid place-items-center size-9 rounded-full hover:bg-white/5"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <img src="/logo.png" alt="logo" className="select-none" draggable={false} />
        </div>

        <nav className="hidden lg:flex w-full max-w-[471px] justify-between">
          <a href="#" className="font-medium text-[15px] leading-[1] tracking-normal capitalize">Home</a>
          <a href="#" className="font-medium text-[15px] leading-[1] tracking-normal capitalize">Features</a>
          <a href="#" className="font-medium text-[15px] leading-[1] tracking-normal capitalize">How it Works</a>
          <a href="#" className="font-medium text-[15px] leading-[1] tracking-normal capitalize">FAQ</a>
          <a href="#" className="font-medium text-[15px] leading-[1] tracking-normal capitalize">Contact Us</a>
        </nav>

        <div className="hidden lg:flex gap-3 items-center">
          <Link
            to="/signin"
            className="font-medium text-[15px] leading-[1] capitalize px-6 py-3 rounded-full border border-[var(--blue)] bg-[var(--color-bg)] hover:border-[var(--hover-blue)]"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="font-medium text-[15px] leading-[1] px-6 py-3 rounded-full bg-[var(--blue)] hover:bg-[var(--hover-blue)]"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[835px] mx-auto mt-[50px] lg:mt-[85px]">
        <h1 className="poppins font-semibold text-[30px] lg:text-[48px] leading-[164%] uppercase text-center">
          Isotoxin - <span className="bg-[var(--blue)] px-4 py-1 rounded-[20px]">secured</span> end-to-end offshore messenger
        </h1>
        <p className="lg:w-[690px] mx-auto text-[14px] leading-[24px] text-center mt-[33px] mb-[54px]">
          Isotoxin is a secure messaging application that safeguards your metadata, encrypts your conversations,
          and ensures that your messaging interactions remain completely anonymous.
        </p>

        <div className="relative mx-auto max-w-[900px]">
          <img src="/header-phone.png" alt="phone" className="mx-auto max-w-full" draggable={false} />

          <img
            src="/badge-bottomleft.png"
            alt=""
            className="hidden lg:block absolute left-[0] bottom-[84px] pointer-events-none select-none"
            draggable={false}
          />

          <img
            src="/msg-left.png"
            alt=""
            className="hidden lg:block absolute left-[95px] top-[130px] pointer-events-none select-none"
            draggable={false}
          />

          <img
            src="/msg-right.png"
            alt=""
            className="hidden lg:block absolute right-[60px] bottom-[119px] pointer-events-none select-none"
            draggable={false}
          />

          <img
            src="/bubble-perfect.png"
            alt=""
            className="hidden lg:block absolute right-[-60px] top-[92px] pointer-events-none select-none"
            draggable={false}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } lg:hidden`}
      >
        <button
          className="absolute inset-0 bg-black/60"
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`
            absolute left-0 top-0 h-full w-[90%]
            bg-[var(--color-bg)] shadow-2xl border-r border-[#2E303E]
            transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 pt-[40px] pb-[52px] flex items-center justify-between">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid place-items-center size-9 rounded-full hover:bg-white/5"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <img src="/logo.png" alt="ISOTOXIN" className="" draggable={false} />
            <span className="w-9" />
          </div>

          <nav className="px-6 space-y-10">
            {["Home", "Features", "How it Works", "FAQ", "Contact Us"].map((item) => (
              <a key={item} href="#" className="block text-[15px] hover:opacity-80">
                {item}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <Link
                to="/signin"
                className="w-full py-3 rounded-[100px] border border-[var(--blue)] hover:border-[var(--hover-blue)] text-[15px] text-center"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="w-full py-3 rounded-[100px] bg-[var(--blue)] hover:bg-[var(--hover-blue)] text-[15px] text-center"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            <div className="mt-[80px]">
              <p className="text-[18px] tracking-wide mb-5">Download</p>
              <div className="space-y-5 flex flex-col">
                <a href="#" className="inline-block">
                  <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-10" />
                </a>
                <a href="#" className="inline-block">
                  <img src="/android-badge.png" alt="APK File" className="h-10" />
                </a>
              </div>
            </div>

            <div className="mt-6 pb-8">
              <p className="text-[18px] tracking-wide mb-5">Social Media</p>
              <div className="flex items-center  md:justify-start gap-6">
                <a href="#" aria-label="Website"><img src="/icons/reddit.svg" alt="reddit" /></a>
                <a href="#" aria-label="X"><img src="/icons/x.svg" alt="x" /></a>
                <a href="#" aria-label="Instagram"><img src="/icons/instagram.svg" alt="instagram" /></a>
                <a href="#" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="linkedin" /></a>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
