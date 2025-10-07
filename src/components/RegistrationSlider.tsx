import { useEffect, useState } from "react";

type Slide = {
    title: string;
    text: string;
    logoSrc?: string;
};

const DEFAULT_SLIDES: Slide[] = [
    {
        title: "No Limits — Just Freedom",
        text:
            "Enjoy complete freedom to connect — send unlimited messages, make endless calls, and start as many video chats as you want. Everything is included with your subscription, no hidden costs or restrictions.",
        logoSrc: "/icons/logo-orb.png",
    },
    {
        title: "No Limits — Just Freedom",
        text:
            "Enjoy complete freedom to connect — send unlimited messages, make endless calls, and start as many video chats as you want. Everything is included with your subscription, no hidden costs or restrictions.",
        logoSrc: "/icons/logo-orb.png",
    },
    {
        title: "No Limits — Just Freedom",
        text:
            "Enjoy complete freedom to connect — send unlimited messages, make endless calls, and start as many video chats as you want. Everything is included with your subscription, no hidden costs or restrictions.",
        logoSrc: "/icons/logo-orb.png",
    },
];

export default function AuthRightSlider({
    slides = DEFAULT_SLIDES,
    auto = true,
    interval = 4000,
}: {
    slides?: Slide[];
    auto?: boolean;
    interval?: number;
}) {
    const [i, setI] = useState(0);

    useEffect(() => {
        if (!auto) return;
        const id = setInterval(() => setI((p) => (p + 1) % slides.length), interval);
        return () => clearInterval(id);
    }, [auto, interval, slides.length]);

    return (
        <div className="w-full max-w-[804px] hidden lg:block">
            <div className="
                relative 
                bg-[url('/bg-registration.png')] bg-no-repeat rounded-[24px]"
            >
                <div className="h-full flex flex-col items-center justify-center text-center">
                    {slides[i]?.logoSrc ? (
                        <img
                            src={slides[i].logoSrc}
                            alt=""
                            className="w-[258px] h-[222px] mt-[315px] mb-[193px] object-contain select-none pointer-events-none"
                            draggable={false}
                        />
                    ) : (
                        <div className="w-[200px] h-[200px] rounded-full border-8 border-[#1d2a44] grid place-items-center">
                            <div className="w-[150px] h-[150px] rounded-full bg-[var(--blue)] grid place-items-center">
                                <div className="w-[100px] h-[100px] rounded-full bg-[var(--blue)]" />
                            </div>
                        </div>
                    )}

                    <div className="mt-10 w-full max-w-[340px]">
                        <div className="h-[4px] relative">
                            <div className="absolute inset-0 flex items-center justify-center gap-2">
                                {slides.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`h-[4px] w-10 rounded-full ${idx === i ? "bg-[var(--blue)]" : "bg-[var(--text-grey)]"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-10 font-semibold text-[20px] leading-[1] capitalize text-center">
                        {slides[i].title}
                    </h3>
                    <p className="mt-3 mb-[120px] max-w-[520px] mx-auto font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
                        {slides[i].text}
                    </p>
                </div>
            </div>
        </div>
    );
}
