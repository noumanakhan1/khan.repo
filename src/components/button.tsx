import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95",
        {
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 border border-white/10":
            variant === "primary",
          "bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700/50":
            variant === "secondary",
          "border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-400 dark:hover:border-slate-500 shadow-sm":
            variant === "outline",
        },
        {
          "px-4 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-8 py-3.5 text-lg tracking-wide": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95",
        {
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 border border-white/10":
            variant === "primary",
          "bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700/50":
            variant === "secondary",
          "border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-400 dark:hover:border-slate-500 shadow-sm":
            variant === "outline",
        },
        {
          "px-4 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-8 py-3.5 text-lg tracking-wide": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
