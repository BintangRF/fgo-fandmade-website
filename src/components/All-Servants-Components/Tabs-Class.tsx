"use client";

import { goldIcon } from "@/data/class-icon";
import { useClassIdStore } from "@/store/useClassIdStore";
import Image from "next/image";
import React from "react";

type TabsClassProps = {
  data: Array<any>;
};

export const TabsClass = ({ data }: TabsClassProps) => {
  const classIdStore = useClassIdStore((state) => state.classId);
  const setClassIdStore = useClassIdStore((state) => state.setClassId);

  // ambil semua class id
  const allClassId = Array.from(
    new Set(data.map((servant) => servant.classId))
  );

  const excludedIds = [33, 38, 40, 20, 22, 24, 26, 29, 9001, 9002, 9003, 9004];
  const addIds = [12];

  // filter class agar menambahkan nilai all, 12, dan class yang tidak perlu
  const filteredClassId = ["all", ...allClassId, ...addIds].filter(
    (id) => id === "all" || !excludedIds.includes(id as number)
  );

  const tabClick = (id: number | "all") => {
    setClassIdStore(id === "all" ? null : id);
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
        {filteredClassId.map((id) => (
          <Image
            onClick={() => tabClick(id)}
            width={48}
            height={48}
            unoptimized
            key={id.toString()}
            src={getIcons(id)}
            alt={id === "all" ? "All Classes" : `Class ${id}`}
            className={`cursor-pointer ${
              (classIdStore === null && id === "all") || classIdStore === id
                ? "opacity-100"
                : "opacity-50"
            } `}
          />
        ))}
      </div>
    </div>
  );
};
