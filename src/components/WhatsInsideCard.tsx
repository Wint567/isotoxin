import { useEffect, useRef, useState } from "react";

export default function WhatsInsideCard() {
  const items = [
    { iconSrc: "/icons/whatsInside-1.svg", iconAlt: "Subscription", title: "Subscription Based Only", desc: "Available only by subscription — ad free and secure by design." },
    { iconSrc: "/icons/whatsInside-2.svg", iconAlt: "Calls",        title: "Unlimited Calls",         desc: "Make unlimited secure calls to any user, anytime." },
    { iconSrc: "/icons/whatsInside-3.svg", iconAlt: "Messages",     title: "Unlimited Messages",      desc: "Send unlimited encrypted messages to any user, anytime." },
    { iconSrc: "/icons/whatsInside-4.svg", iconAlt: "Video Calls",  title: "Unlimited Video Calls",   desc: "Enjoy unlimited private video calls with any user, fully encrypted." },
  ];

  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { root: track, threshold: 0.55 }
    );

    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const track = trackRef.current;
    const el = slideRefs.current[i];
    if (!track || !el) return;
    track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <article key={i} className="rounded-[24px] bg-[var(--card-color)] py-6 px-8 max-w-[357px] w-full mx-auto">
            <div className="mb-6"><img src={it.iconSrc} alt={it.iconAlt} draggable={false} /></div>
            <h3 className="font-semibold text-[20px] leading-[1] capitalize">{it.title}</h3>
            <p className="mt-4 text-[15px] leading-[24px] text-[var(--text-grey)]">{it.desc}</p>
          </article>
        ))}
      </div>

      <div className="md:hidden">
        <div
          ref={trackRef}
          className="
            overflow-x-auto overscroll-x-contain
            snap-x snap-mandatory scroll-smooth
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            pb-5
          "
        >
          <div className="flex gap-0 w-full">
            {items.map((it, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => { slideRefs.current[i] = el; }}
                className="snap-start shrink-0 w-full"
              >
                <article className="rounded-[24px] bg-[var(--card-color)] py-6 px-8">
                  <div className="mb-6"><img src={it.iconSrc} alt={it.iconAlt} draggable={false} /></div>
                  <h3 className="font-semibold text-[20px] leading-[1] capitalize">{it.title}</h3>
                  <p className="mt-4 text-[15px] leading-[24px] text-[var(--text-grey)]">{it.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[4px] w-10 rounded-full transition-colors ${active === i ? "bg-[var(--blue)]" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
