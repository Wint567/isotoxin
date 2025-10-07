import { useState } from "react";
import RegistrationSlider from "../components/RegistrationSlider";
import InputField from "../components/ui/InputField";

export default function SignIn() {
  type Form = { username: string; password: string };
  const [form, setForm] = useState<Form>({ username: "", password: "" });
  const [touched, setTouched] = useState<{ username: boolean; password: boolean }>({
    username: false,
    password: false,
  });

  const onChange =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onBlur = (key: keyof Form) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  const usernameError =
    touched.username && !form.username.trim()
      ? "Please enter your username or email."
      : undefined;

  const passwordError =
    touched.password && !form.password.trim()
      ? "Please enter your password."
      : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ username: true, password: true });

    const hasErrors =
      !form.username.trim() || !form.password.trim();

    if (hasErrors) return;

    console.log("submit", form);
  };

  return (
    <div className="w-full max-w-[1664px] py-5 lg:py-10 mx-auto justify-center flex gap-[60px] px-4">
      <div className="w-full max-w-[768px] mt-6 lg:mt-[30px] flex flex-col items-center">
        <div className="w-full pl-7 lg:pl-0 flex justify-start lg:justify-center items-center gap-[50px]">
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

        <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1] uppercase text-center mt-[153px]">
          WELCOME
        </h2>

        <p className="mt-6 font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
          Please sign in to your account to continue.
        </p>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full max-w-[768px] mx-auto mt-[50px] space-y-6"
        >
          <InputField
            id="username"
            name="username"
            label="Username or email"
            placeholder="Scavenger"
            value={form.username}
            onChange={onChange("username")}
            onBlur={onBlur("username")}
            error={usernameError}
            autoComplete="username email"
            required
          />

          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="**************"
            value={form.password}
            onChange={onChange("password")}
            onBlur={onBlur("password")}
            error={passwordError}
            required
          />

          <div className="flex items-center justify-between pt-1">
            <label className="inline-flex items-center gap-2 text-[var(--text-grey)]">
              <input type="checkbox" className="size-5 bg-transparent accent-[var(--blue)]" defaultChecked />
              <span className="text-[15px] leading-[24px]">Remember me</span>
            </label>

            <a href="/forgot" className="text-[15px] leading-[24px] text-[var(--text-grey)] hover:text-[var(--blue)] underline underline-offset-[3px]">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-[60px] rounded-[100px] bg-[var(--blue)] text-white cursor-pointer font-medium text-[16px] leading-[1] hover:bg-[var(--hover-blue)] transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="w-full max-w-[768px] mx-auto mt-[156px] lg:mt-[120px] text-center text-[15px] text-[var(--text-grey)]">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[var(--blue)] hover:underline">
            Create an Account
          </a>
        </p>
      </div>
      <RegistrationSlider />
    </div>
  );
}
