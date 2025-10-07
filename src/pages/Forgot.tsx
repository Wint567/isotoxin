import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/ui/InputField";

export default function Forgot() {
  const [identity, setIdentity] = useState("");
  const [touched, setTouched] = useState(false);

  const identityError =
    touched && !identity.trim() ? "Please enter your username or email." : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!identity.trim()) return;
    console.log("send reset link to:", identity);
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

      <h2 className="poppins font-semibold text-[30px] lg:text-[40px] leading-[1] uppercase text-center mt-[173px] lg:mt-[252px]">
        Password Recovery
      </h2>

      <p className="mt-5 font-normal text-[15px] leading-[24px] text-center text-[var(--text-grey)]">
        Enter your username or email address so we can send you a link to reset your password.
      </p>

      <form noValidate onSubmit={handleSubmit} className="w-full mt-[60px] space-y-6 text-left">
        <InputField
          id="identity"
          label="Username or Email"
          type="text"
          placeholder="example@gmail.com"
          aria-label="Username or Email"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          onBlur={() => setTouched(true)}
          error={identityError}
          autoComplete="username email"
          required
        />

        <button
          type="submit"
          className="
            w-full h-[60px] rounded-[100px]
            bg-[var(--blue)] text-white cursor-pointer
            font-medium text-[16px] leading-[1] hover:bg-[var(--hover-blue)] transition-colors
          "
        >
          Send Reset Link
        </button>
      </form>

      <p className="w-full max-w-[768px] mx-auto mt-[216px] lg:mt-[120px] text-center text-[15px] text-[var(--text-grey)]">
        Remember password?{" "}
        <Link to="/signin" className="text-[var(--blue)] hover:underline">
          Back to Sign In
        </Link>
      </p>
    </div>
  );
}
