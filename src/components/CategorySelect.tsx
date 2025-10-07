import { useEffect, useRef, useState } from "react";

export default function CategorySelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const ref = useRef<HTMLLabelElement>(null);

  const OPTIONS = ["General", "Account", "Security", "Billing"];

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <label ref={ref} className="relative block rounded-[16px] bg-[var(--color-bg)] px-6 py-3">
      <span className="font-semibold text-[10px] leading-[24px] uppercase text-[var(--text-grey)]">
        Question Category
      </span>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="
          w-full text-left text-white text-[15px] leading-[24px]
          h-6 flex items-center pr-10 focus:outline-none
        "
      >
        <span className={value ? "" : "text-white"}>{value || "Select"}</span>
      </button>

      <span
        aria-hidden
        className="pointer-events-none absolute right-[33px] top-1/2 -translate-y-1/2"
      >
        <svg
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          width="10" height="6" viewBox="0 0 10 6" fill="none"
        >
          <path
            d="M1 1.25L5 4.75L9 1.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {open && (
        <ul
          className="
            absolute left-0 right-0 top-[calc(100%+8px)]
            z-50 rounded-[12px] bg-[var(--color-bg)]
            border border-white/10 shadow-lg overflow-hidden
            max-h-60 overflow-auto
          "
          role="listbox"
        >
          {OPTIONS.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  setValue(opt);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-[15px]
                  hover:bg-white/10 focus:bg-white/10 transition-colors
                  ${value === opt ? "bg-white/10" : ""}
                `}
                role="option"
                aria-selected={value === opt}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
