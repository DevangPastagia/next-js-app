"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = [
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/forgot-password",
    label: "Forgot Password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {NavLink.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-500 hover:text-blue-500"
            } block mb-2`}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
