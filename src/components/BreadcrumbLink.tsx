"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BreadcrumbLink = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <div>
      <nav className="relative z-10 flex items-center gap-2 py-3 px-8 text-custom-ivory-white text-sm">
        <Link href="/" className="flex items-center gap-1 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="group-hover:underline">Home</span>
        </Link>

        {paths.map((segment, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <React.Fragment key={href}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              {isLast ? (
                <span className="font-semibold capitalize">{segment}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {segment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};
