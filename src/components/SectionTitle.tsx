import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col py-14 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="font-serif flex gap-2 justify-center items-center text-3xl font-bold tracking-wider text-shadow-sm text-custom-gold-accent text-shadow-custom-midnight-blue uppercase">
          {/* diamond */}
          <svg
            className="ml-1 w-3 h-3 text-custom-gold-accent drop-shadow-xs drop-shadow-custom-royal-blue"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
          </svg>

          {props.preTitle}

          {/* diamond */}
          <svg
            className="ml-1 w-3 h-3 text-custom-gold-accent drop-shadow-xs drop-shadow-custom-royal-blue"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
          </svg>
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-custom-midnight-blue lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-custom-royal-blue lg:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};
