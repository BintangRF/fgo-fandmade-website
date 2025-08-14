"use client";

import { useClassIdStore } from "@/store/useClassIdStore";
import React, { useState } from "react";
import { FilledButton } from "../Button";
import { Container } from "../Container";
import { ServantCard } from "../ServantCard";

type ServantListProps = {
  data: Array<any>;
};

export const ServantList = ({ data }: ServantListProps) => {
  const [batch, setBatch] = useState(20);

  const classIdStore = useClassIdStore((state) => state.classId);

  // class yang bernilai 12 menjadi array class yang diinginkan
  const allowedClassId =
    classIdStore === 12
      ? [33, 38, 40, 20, 22, 24, 26, 29, 9001, 9002, 9003, 9004]
      : [classIdStore];

  // filter data apabila class id store tersedia maka filter berdasarkan allowed class id
  const filteredData = classIdStore
    ? data.filter((servant) => allowedClassId.includes(servant.classId))
    : data;

  const visibleData = filteredData.slice(0, batch);

  const removeButton = visibleData.length === filteredData.length;

  const handleViewMore = () => {
    setBatch((prev) => prev + 10);
  };

  return (
    <div className="p-4 flex flex-col w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {visibleData.map((servant) => (
          <ServantCard
            key={servant.id}
            id={servant.id}
            name={servant.name}
            className={servant.className}
            rarity={servant.rarity}
            imgSrc={
              servant.extraAssets.charaGraph.ascension[0] ||
              servant.extraAssets.charaGraph.ascension[1] ||
              ""
            }
            link={`/all-servants/${servant.name.split("/").join(" ")}/${
              servant.id
            }`}
          />
        ))}
      </div>

      {removeButton === false ? (
        <div className="text-center mt-8 relative z-10">
          <FilledButton onClick={handleViewMore}>
            View More Servants
          </FilledButton>
        </div>
      ) : null}
    </div>
  );
};
