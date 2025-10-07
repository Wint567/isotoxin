import { useState } from "react";
import RegistrationSlider from "../components/RegistrationSlider";
import InputField from "../components/ui/InputField";

export default function SignUp() {
  type Form = { email: string; username: string; password: string; confirm: string };
  const [form, setForm] = useState<Form>({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });
  const [touched, setTouched] = useState<Record<keyof Form, boolean>>({
    email: false,
    username: false,
    password: false,
    confirm: false,
  });

  const onChange =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onBlur = (key: keyof Form) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailError =
    touched.email &&
    (!form.email.trim()
      ? "Please enter your email."
      : !emailPattern.test(form.email)
      ? "Enter a valid email."
      : undefined) || undefined;

  const usernameError =
    touched.username && !form.username.trim()
      ? "Please enter your username."
      : undefined;

  const passwordError =
    touched.password && !form.password.trim()
      ? "Please enter your password."
      : undefined;

  const confirmError =
    touched.confirm &&
    (!form.confirm.trim()
      ? "Please confirm your password."
      : form.password && form.confirm !== form.password
      ? "Passwords do not match."
      : undefined) || undefined;

  const hasErrors =
    !!emailError || !!usernameError || !!passwordError || !!confirmError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, username: true, password: true, confirm: true });

    if (
      !form.email.trim() ||
      !emailPattern.test(form.email) ||
      !form.username.trim() ||
      !form.password.trim() ||
      !form.confirm.trim() ||
      form.confirm !== form.password
    ) {
      return;
    }

    console.log("register", form);
  };

  return (
    <div className="w-full max-w-[1664px] py-5 lg:py-10 mx-auto justify-center flex gap-[60px] px-4">
      <RegistrationSlider />
      <div className="w-full max-w-[768px] mt-[30px] flex flex-col items-center">
        <div className="w-full pl-7 lg:pl-0 flex justify-start lg:justify-center items-center gap-[50px]">
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Open menu"
          >
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <img src="/logo.png" alt="ISOTOXIN" className="select-none" draggable={false} />
        </div>

        <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1] uppercase text-center mt-[76px]">
          Join in seconds
        </h2>

        <p className="mt-6 font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
          Create your account to start using our secure messenger today.
        </p>

        <form noValidate onSubmit={handleSubmit} className="w-full mt-[60px] space-y-6">
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={onChange("email")}
            onBlur={onBlur("email")}
            error={emailError}
            autoComplete="email"
            required
          />

          <InputField
            id="username"
            name="username"
            label="Username"
            placeholder="Scavenger"
            value={form.username}
            onChange={onChange("username")}
            onBlur={onBlur("username")}
            error={usernameError}
            autoComplete="username"
            required
          />

          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="************"
            value={form.password}
            onChange={onChange("password")}
            onBlur={onBlur("password")}
            error={passwordError}
            autoComplete="new-password"
            required
          />

          <InputField
            id="confirm"
            name="confirm"
            label="Confirm Password"
            type="password"
            placeholder="************"
            value={form.confirm}
            onChange={onChange("confirm")}
            onBlur={onBlur("confirm")}
            error={confirmError}
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            disabled={hasErrors && (touched.email || touched.username || touched.password || touched.confirm)}
            className="
              w-full h-[60px] rounded-[100px]
              bg-[var(--blue)] text-white cursor-pointer
              font-medium text-[16px] leading-[1] hover:bg-[var(--hover-blue)] transition-colors
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            Register Now
          </button>
        </form>

        <p className="font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)] mt-6">
          By clicking register now, you agree to our{" "}
          <a className="underline underline-offset-[3px]" href="#">Terms &amp; Conditions</a> and{" "}
          <a className="underline underline-offset-[3px]" href="#">Privacy Policy.</a>
        </p>

        <p className="w-full max-w-[768px] mx-auto mt-[52px] lg:mt-[120px] text-center text-[15px] text-[var(--text-grey)]">
          Already have an account?{" "}
          <a href="/signin" className="text-[var(--blue)] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
