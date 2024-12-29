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
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="font-gilroy max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="font-gilroy max-w-2xl py-4 text-lg font-semibold leading-normal text-[#3E4581] lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};
