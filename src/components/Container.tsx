import React from "react";

type ContainerProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      id={props.id}
      className={`p-8 mx-auto ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}
