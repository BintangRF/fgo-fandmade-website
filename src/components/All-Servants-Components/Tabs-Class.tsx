"use client";

import { goldIcon } from "@/data/class-icon";
import { useClassIdStore } from "@/store/useClassIdStore";
import Image from "next/image";
import React from "react";

type TabsClassProps = {
  data: Array<any>;
};

export const TabsClass = ({ data }: TabsClassProps) => {
  const classId = useClassIdStore((state) => state.classId);
  const setClassId = useClassIdStore((state) => state.setClassId);

  const allClassId = Array.from(
    new Set(data.map((servant) => servant.classId))
  );

  const excludedIds = [33, 38, 40, 20, 22, 24, 26, 29, 9001, 9002, 9003, 9004];
  const addIds = [12];

  // tambah satu tab khusus dengan id 'null'
  const updatedClassId = ["all", ...allClassId, ...addIds].filter(
    (id) => id === "all" || !excludedIds.includes(id as number)
  );

  const imageClick = (id: number | "all") => {
    setClassId(id === "all" ? null : id);
  };

  const getIcons = (classId: number | "all") => {
    if (classId === "all") {
      return "/img/all-class.png";
    }
    return goldIcon(classId);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {updatedClassId.map((id) => (
          <Image
            onClick={() => imageClick(id)}
            width={48}
            height={48}
            unoptimized
            key={id.toString()}
            src={getIcons(id)}
            alt={id === "all" ? "All Classes" : `Class ${id}`}
            className={`cursor-pointer ${
              (classId === null && id === "all") || classId === id
                ? "opacity-100"
                : "opacity-50"
            } `}
          />
        ))}
      </div>
    </div>
  );
};
