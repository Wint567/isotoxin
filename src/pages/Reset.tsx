import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/ui/InputField";

export default function Reset() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const [touched, setTouched] = useState({ newPassword: false, confirmPassword: false });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onBlur = (key: keyof typeof form) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  const minLen = 8;

  const newPassError =
    touched.newPassword &&
    (!form.newPassword.trim()
      ? "Please enter a new password."
      : form.newPassword.length < minLen
      ? `Password must be at least ${minLen} characters.`
      : undefined) || undefined;

  const confirmError =
    touched.confirmPassword &&
    (!form.confirmPassword.trim()
      ? "Please confirm your password."
      : form.confirmPassword !== form.newPassword
      ? "Passwords do not match."
      : undefined) || undefined;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ newPassword: true, confirmPassword: true });

    if (
      !form.newPassword.trim() ||
      form.newPassword.length < minLen ||
      !form.confirmPassword.trim() ||
      form.confirmPassword !== form.newPassword
    ) {
      return;
    }

    navigate("/notice");
  };

  return (
    <div className="w-full max-w-[768px] mx-auto text-center flex flex-col items-center px-4">
      <div className="w-full pl-7 lg:pl-0 flex justify-start lg:justify-center items-center gap-[50px] mt-[44px] lg:mt-[74px]">
        <button
          type="button"
          className="lg:hidden p-2 -ml-2 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <img src="/logo.png" alt="ISOTOXIN" className="select-none" draggable={false} />
      </div>

      <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1.6] uppercase text-center mt-[126px] lg:mt-[276px]">
        Create a New Password
      </h2>
      <p className="mt-5 font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
        Please enter a new password for your account. Make sure it’s strong enough.
      </p>

      <form onSubmit={handleSubmit} noValidate className="w-full mt-[60px] space-y-6 text-left">
        <InputField
          id="new-password"
          label="New Password"
          type="password"
          placeholder="*********"
          value={form.newPassword}
          onChange={onChange("newPassword")}
          onBlur={onBlur("newPassword")}
          error={newPassError}
          autoComplete="new-password"
          required
        />

        <InputField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="*********"
          value={form.confirmPassword}
          onChange={onChange("confirmPassword")}
          onBlur={onBlur("confirmPassword")}
          error={confirmError}
          autoComplete="new-password"
          required
        />

        <button
          type="submit"
          className="
            w-full h-[60px] rounded-[100px]
            bg-[var(--blue)] text-white cursor-pointer
            font-medium text-[16px] leading-[1]
            hover:bg-[var(--hover-blue)] transition-colors
          "
        >
          Save New Password
        </button>
      </form>

      <div className="mt-[120px]" />
    </div>
  );
}
