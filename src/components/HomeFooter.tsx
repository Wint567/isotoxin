export default function HomeFooter() {
  return (
    <footer className="w-full max-w-[1646px] mx-auto mt-[80px] md:mt-[117px] mb-[40px] px-4">
      <div
        className="
          bg-[url('/bg-footer-phone.png')] lg:bg-[url('/footer-bg.png')]
          bg-no-repeat bg-center bg-cover lg:bg-auto
          rounded-[24px] py-8 md:py-[44px] px-6 md:px-[66px]
        "
      >

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="text-center lg:text-left">
            <img src="/logo.png" alt="ISOTOXIN" className="mx-auto mb-0 lg:mb-6 lg:mx-0" />
            <p className="text-[15px] leading-[18px] text-[var(--text-grey)] hidden lg:block">
              © 2025 Isotoxin. All rights reserved.
            </p>

          </div>

          <div className="w-full md:max-w-[1098px] flex flex-col justify-between lg:flex-row gap-10 md:gap-6">
            <div className="hidden lg:block text-left">
              <h4 className="text-[18px] font-semibold mb-3 md:mb-5">About</h4>
              <ul className="space-y-2 text-[15px] leading-[24px] text-[var(--text-grey)]">
                <li><a className="hover:text-white" href="#features">Features</a></li>
                <li><a className="hover:text-white" href="#how">How it Works</a></li>
                <li><a className="hover:text-white" href="#faq">FAQ</a></li>
                <li><a className="hover:text-white" href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="hidden lg:block text-center lg:text-left">
              <h4 className="text-[18px] font-semibold mb-3 md:mb-5">Resources</h4>
              <ul className="space-y-2 text-[15px] leading-[24px] text-[var(--text-grey)]">
                <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
                <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-[18px] font-semibold mb-3 md:mb-5">Download</h4>
              <div className="flex flex-col items-center lg:items-start gap-4 md:gap-5">
                <a href="#" aria-label="Get it on Google Play">
                  <img src="/google-play-badge.svg" alt="Google Play" className="h-10 md:h-auto" />
                </a>
                <a href="#">
                  <img src="/android-badge.png" alt="Android APK" className="h-10 md:h-auto" />
                </a>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-[18px] font-semibold mb-3 md:mb-5">Social Media</h4>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <a href="#" aria-label="Website"><img src="/icons/reddit.svg" alt="reddit" /></a>
                <a href="#" aria-label="X"><img src="/icons/x.svg" alt="x" /></a>
                <a href="#" aria-label="Instagram"><img src="/icons/instagram.svg" alt="instagram" /></a>
                <a href="#" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="linkedin" /></a>
              </div>
            </div>
            <p className="text-[15px] text-center leading-[18px] text-[var(--text-grey)] lg:hidden">
              © 2025 Isotoxin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
