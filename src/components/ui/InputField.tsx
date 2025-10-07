import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = {
  label: string;
  error?: string;
  subtext?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  subtext,
  disabled,
  className,
  id,
  ...inputProps
}: Props) {
  const inputId = id as string | undefined;
  const helpId = inputId ? `${inputId}-help` : undefined;

  return (
    <div className="w-full">
      <div
        className={clsx(
          `
            w-full rounded-[16px] border bg-[var(--card-color)]
            px-6 py-3 flex flex-col
            focus-within:border-[var(--blue)] /* цвет рамки при фокусе внутри */
          `,
          error
            ? "border-[#832D29]"
            : "border-[var(--card-color)]",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <label
          htmlFor={inputId}
          className={clsx(
            "text-[10px] py-1 font-medium uppercase select-none",
            "text-[var(--text-grey)]"
          )}
        >
          {label}
        </label>

        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          aria-describedby={helpId}
          {...inputProps}
          className={clsx(
            `
              w-full h-[24px] bg-transparent outline-none border-0
              text-[15px] leading-[24px]
              placeholder:text-[#FFF1F1]
            `,
            disabled ? "text-white/30" : "text-white"
          )}
        />
      </div>

      {error ? (
        <p id={helpId} className="mt-2 text-[13px] leading-[18px] text-[#EB4335]">
          {error}
        </p>
      ) : (
        subtext && (
          <p id={helpId} className="mt-2 text-[13px] leading-[18px] text-[var(--text-grey)]">
            {subtext}
          </p>
        )
      )}
    </div>
  );
}
