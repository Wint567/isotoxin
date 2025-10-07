import BigHeader from '../components/BigHeader'
import CategorySelect from '../components/CategorySelect'
import FaqSection from '../components/FaqSection'
import HomeFooter from '../components/HomeFooter'
import WhatsInsideCard from '../components/WhatsInsideCard'

export default function Home() {
  return (
    <div className="w-full">
      <BigHeader />
      <main>
        <section className="w-full px-[51px] max-w-[1228px] mx-auto mt-[64px] mb-[80px] md:my-[126px] grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          <div className="text-center">
            <p className="font-normal text-[16px] leading-[24px] tracking-normal capitalize text-[var(--text-grey)]">
              <span className="poppins font-normal text-[40px] leading-[1] uppercase text-[var(--color-text)] block">
                7,430
              </span>
              <span className="block mt-3 sm:mt-0">Bug bounty <span className="sm:inline block">programs</span></span>
            </p>
          </div>

          <div className="text-center">
            <p className="font-normal text-[16px] leading-[24px] tracking-normal capitalize text-[var(--text-grey)]">
              <span className="poppins font-normal text-[40px] leading-[1] uppercase text-[var(--color-text)] block">
                14,360
              </span>
              <span className="block mt-3 sm:mt-0">Exploits <span className="sm:inline block">protection</span></span>
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 justify-self-center md:justify-self-auto text-center">
            <p className="font-normal text-[16px] leading-[24px] tracking-normal capitalize text-[var(--text-grey)]">
              <span className="poppins font-normal text-[40px] leading-[1] uppercase text-[var(--color-text)] block">
                6,212
              </span>
              <span className="block mt-3 sm:mt-0">Anonymity and Confidentiality</span>
            </p>
          </div>
        </section>
        <section className="w-full px-4 max-w-[1562px] mx-auto flex flex-col items-center mb-[80px] md:mb-[240px]">
          <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1] uppercase text-center mb-8">What’s inside</h2>
          <p className="font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)] mb-[60px]">Discover all the powerful tools built into our messenger — from secure messaging to unlimited calls and video chats.</p>
          <WhatsInsideCard />
        </section>
        <section className="relative overflow-hidden px-4">
          <img
            src="/howItWorks-bg.svg"
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute left-0 bottom-[72px] -z-10 hidden xl:block"
          />

          <div
            className="
              w-full max-w-[1391px] mx-auto
              flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16
            "
          >
            <img src="/howItWorks-photo.png" alt="photo" className="hidden xl:block" />

            <div className="w-full xl:max-w-[508px]">
              <h2 className="poppins font-semibold uppercase text-[28px] sm:text-[34px] lg:text-[40px] leading-[1] text-center xl:text-left">
                How it works?
              </h2>
              <p className="mt-4 sm:mt-5 text-[15px] leading-[24px] text-[var(--text-grey)] text-center xl:text-left">
                Getting started with our messenger takes just 3 simple steps
              </p>

              <div className="mt-[64px]">
                <div className="flex justify-center gap-6 sm:gap-7">
                  <div className="relative flex flex-col items-center z-0 py-1 w-full max-w-[52px]">
                    <span
                      aria-hidden
                      className="
                          pointer-events-none absolute left-1/2 -translate-x-1/2
                          top-[44px] bottom-[44px] w-[2px] -z-10
                          bg-[repeating-linear-gradient(to_bottom,_#2E303E_0_8px,_transparent_8px_16px)]
                        "
                    />
                    <img src="/icons/howItWorksStep-1.png" alt="first" className="w-[52px] z-10" />
                    <div className="h-24 sm:h-19" />
                    <img src="/icons/howItWorksStep-2.png" alt="second" className="w-[52px] z-10" />
                    <div className="h-24 sm:h-19" />
                    <img src="/icons/howItWorksStep-3.png" alt="third" className="w-[52px]  z-10" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[18px] sm:text-[20px]">Register Account</h3>
                    <p className="mt-2 text-[15px] leading-[24px] text-[var(--text-grey)]">
                      Set up your account in just a minute and make it truly yours.
                    </p>

                    <div className="mt-[64px]">
                      <h3 className="font-semibold text-[18px] sm:text-[20px]">Subscribe</h3>
                      <p className="mt-2 text-[15px] leading-[24px] text-[var(--text-grey)]">
                        Choose a plan and enjoy unlimited secure communication.
                      </p>
                    </div>

                    <div className="mt-[64px]">
                      <h3 className="font-semibold text-[18px] sm:text-[20px]">Download The App</h3>
                      <p className="mt-2 text-[15px] leading-[24px] text-[var(--text-grey)]">
                        Get our secure messenger on your device at no cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-[10px] justify-center xl:justify-start xl:ml-[84px]">
                <a href="#"><img src="/google-play-badge.svg" alt="Google Play" /></a>
                <a href="#"><img src="/android-badge.png" alt="android" /></a>
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
        <section className="w-full max-w-[1546px] mx-auto md:mt-[160px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full lg:max-w-[753px]">
              <h2 className="poppins font-semibold text-[28px] md:text-[40px] leading-[1] uppercase text-center lg:text-left">
                Get in touch
              </h2>
              <p className="text-center lg:text-left text-[15px] leading-[24px] text-[var(--text-grey)] mt-4 md:mt-5 max-w-[590px] mx-auto lg:mx-0">
                We’d love to hear from you — whether it’s a question, feedback, or just to say hello.
                Send us a message and our team will gladly help you out and keep you updated.
              </p>

              <div className="w-full justify-center lg:justify-start flex flex-col md:flex-row gap-4 md:gap-6 mt-8 md:mt-10">
                <div className="border-[3px] border-[var(--card-color)] rounded-[16px] w-full md:w-[320px] py-5 px-6 flex gap-4 items-center">
                  <img src="/icons/tg-icon.svg" alt="Telegram" />
                  <div>
                    <h5 className="font-semibold text-[10px] leading-[24px] text-[var(--text-grey)]">TELEGRAM</h5>
                    <a className="font-normal text-[15px] leading-[24px] text-[#FFF1F1]" href="#">@isotoxin</a>
                  </div>
                </div>

                <div className="border-[3px] border-[var(--card-color)] rounded-[16px] w-full md:w-[320px] py-5 px-6 flex gap-4 items-center">
                  <img src="/icons/email-icon.svg" alt="Email" />
                  <div>
                    <h5 className="font-semibold text-[10px] leading-[24px] text-[var(--text-grey)] uppercase">email</h5>
                    <a className="font-normal text-[15px] leading-[24px] text-[#FFF1F1]" href="#">support@isotoxin.im</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="w-full lg:max-w-[753px]">
              <div className="rounded-[24px] py-8 md:py-10 px-6 md:px-8 bg-[var(--card-color)] space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="rounded-[16px] bg-[var(--color-bg)] py-3 px-6">
                    <span className="font-semibold text-[10px] leading-[24px] uppercase text-[var(--text-grey)]">Name</span>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent h-[24px] px-0 border-0 outline-none
                      text-white placeholder:text-[#FFF1F1] text-[15px] leading-[24px]"
                    />
                  </label>

                  <label className="rounded-[16px] bg-[var(--color-bg)] py-3 px-6">
                    <span className="font-semibold text-[10px] leading-[24px] uppercase text-[var(--text-grey)]">Email</span>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent h-[24px] px-0 border-0 outline-none
                      text-white placeholder:text-[#FFF1F1] text-[15px] leading-[24px]"
                    />
                  </label>
                </div>

                <CategorySelect />

                <label className="block rounded-[16px] bg-[var(--color-bg)] p-4">
                  <span className="font-semibold text-[10px] leading-[24px] uppercase text-[var(--text-grey)]">Message</span>
                  <textarea
                    placeholder="Enter Your Question"
                    className="mt-1 w-full h-[92px] bg-transparent border-0 outline-none resize-none
                    text-white placeholder:text-[#FFF1F1] text-[15px] leading-[24px]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center h-[48px] px-6 rounded-[100px]
                  bg-[var(--blue)] text-[15px] font-medium w-full md:w-auto
                  hover:brightness-110 active:brightness-95 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        <img className="mt-[57px]" src="/bottom-bg.svg" alt="bottom-bg" />
      </main>
      <HomeFooter />
    </div>
  )
}
