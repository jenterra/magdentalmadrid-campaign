import { ArrowIcon } from "./icons";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export function Button({ href, children, variant = "dark", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`btn btn--${variant} ${className}`.trim()}>
      <span className="btn__text">{children}</span>
      <ArrowIcon />
    </a>
  );
}
