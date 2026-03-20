import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          KdG Onboarding
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="#home"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#team"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="#blog"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} KdG Onboarding Platform. Powered by Karel
          de Grote Hogeschool.
        </p>
      </div>
    </footer>
  );
}
