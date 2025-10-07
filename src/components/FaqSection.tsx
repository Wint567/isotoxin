type TabKey = "Messenger" | "About Us" | "Secure" | "Else";

const TABS: TabKey[] = ["Messenger", "About Us", "Secure", "Else"];

const QUESTIONS: string[] = [
  "What Is Isotoxin Messenger?",
  "Why Should I Trust Isotoxin?",
  "Does Isotoxin Have Calls ?",
  "How Do I Make A Call?",
];

export default function FaqSection() {
  return (
    <section className="bg-[url('/frequently-bg.png')] bg-no-repeat bg-bottom mt-[160px] md:mt-[240px] pb-[80px] px-4">
      <div className="w-full max-w-[753px] mx-auto">
        <h2 className="poppins font-semibold uppercase text-[28px] md:text-[40px] leading-[1] text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 md:mt-7 text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
          Got questions? We’ve collected the most popular ones with clear answers so you can get help instantly.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3">
          {TABS.map((tab, i) => (
            <span
              key={tab}
              className={[
                "h-[40px] md:h-[44px] px-5 md:px-6 rounded-[100px] text-[14px] md:text-[15px] font-medium",
                "inline-flex items-center justify-center select-none pointer-events-none",
                i === 0 ? "bg-[var(--blue)]" : "bg-[var(--card-color)]",
              ].join(" ")}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-8 md:mt-[60px] space-y-4 md:space-y-5">
          {QUESTIONS.map((q) => (
            <div key={q} className="rounded-[16px] bg-[var(--card-color)]">
              <div className="px-5 md:px-8 py-5 md:py-6 flex items-center justify-between">
                <span className="text-[16px] md:text-[18px] leading-[24px] pr-4">{q}</span>
                <span className="size-8 md:size-9 grid place-items-center rounded-full bg-[var(--blue)] text-white select-none">
                  +
                </span>
              </div>
            </div>
          ))}

          <div className="rounded-[16px] bg-[#333745] px-5 md:px-8 py-5 md:py-6 flex items-center justify-between">
            <span className="text-[16px] md:text-[18px] leading-[24px]">Still Have Questions?</span>
            <a
              href="#contact"
              className="py-[11px] md:py-[13px] px-5 md:px-6 rounded-[100px] bg-[var(--blue)] text-[14px] md:text-[15px] inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
