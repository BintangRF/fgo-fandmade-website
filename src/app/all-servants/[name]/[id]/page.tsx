"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { useServant } from "@/hooks/useServant";
import React from "react";
import { ServantCard } from "@/components/ServantCard";

export default function ServantDetailPage({
  params,
}: {
  params: { name: string; id: string };
}) {
  const { data = [], error, isLoading } = useServant.useGet();

  if (isLoading) return <Container>Loading...</Container>;
  if (error) return <Container>Error: {(error as Error).message}</Container>;

  const servantId = parseInt(params.id, 10);
  const servant = data.find((s) => s.id === servantId);

  if (!servant) {
    return <Container>Servant not found</Container>;
  }

  const ascensions = servant.extraAssets?.charaGraph?.ascension || {};
  const costumes = servant.extraAssets?.charaGraph?.costume || {};
  const parameters = servant.parameters || {};
  const activeSkills = servant.skills || [];
  const classSkills = servant.classPassive || [];
  const noblePhantasms = servant.noblePhantasms || [];
  const traits = servant.traits?.map((t: { name: string }) => t.name) || [];

  return (
    <Container>
      {/* Basic Info */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{servant.name}</h1>
        <p className="text-gray-500 mb-1">
          Class: <b>{servant.className}</b> | Rarity: <b>{servant.rarity}★</b> |
          Attribute: <b>{servant.attribute}</b> | Alignment:{" "}
          <b>{servant.alignment}</b>
        </p>
        <p className="text-gray-500 mb-1">
          Gender: <b>{servant.gender}</b> | Illustrator:{" "}
          <b>{servant.illustrator}</b> | CV: <b>{servant.cv}</b>
        </p>
      </div>

      {/* Additional Info Table */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Additional Info</h2>
        <table className="table-auto w-full text-gray-700">
          <tbody>
            <tr>
              <td className="font-medium py-1">Collection No</td>
              <td>{servant.collectionNo}</td>
            </tr>
            <tr>
              <td className="font-medium py-1">Original Name</td>
              <td>
                {servant.originalName} ({servant.ruby})
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Battle Name</td>
              <td>
                {servant.battleName} ({servant.originalBattleName})
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Type / Flag</td>
              <td>
                {servant.type} / {servant.flag}
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Cost / Max Level</td>
              <td>
                {servant.cost} / {servant.lvMax}
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Base ATK / HP</td>
              <td>
                {servant.atkBase} / {servant.hpBase}
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Max ATK / HP</td>
              <td>
                {servant.atkMax} / {servant.hpMax}
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Star Absorb / Gen</td>
              <td>
                {servant.starAbsorb} / {servant.starGen}
              </td>
            </tr>
            <tr>
              <td className="font-medium py-1">Instant Death Chance</td>
              <td>{servant.instantDeathChance}</td>
            </tr>
            <tr>
              <td className="font-medium py-1">Cards</td>
              <td>{servant.cards.join(", ")}</td>
            </tr>
            <tr>
              <td className="font-medium py-1">Related Quests</td>
              <td>{servant.relateQuestIds.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Parameter Stats */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Parameters</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {Object.entries(parameters).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-100 rounded-lg p-2 text-center shadow"
            >
              <p className="text-sm font-medium">{key.toUpperCase()}</p>
              <p className="text-lg font-bold">{String(value)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Traits */}
      {traits.length > 0 && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Traits</h2>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait: string) => (
              <span
                key={trait}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ascensions */}
      {Object.keys(ascensions).length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ascensions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(ascensions).map(([key, url]) => (
              <ServantCard id={parseInt(key)} imgSrc={url || ""} />
            ))}
          </div>
        </div>
      )}

      {/* Costumes */}
      {Object.keys(costumes).length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Costumes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(costumes).map(([id, url]) => (
              <ServantCard id={parseInt(id)} imgSrc={url || ""} />
            ))}
          </div>
        </div>
      )}

      {/* Noble Phantasms */}
      {noblePhantasms.length > 0 && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Noble Phantasms</h2>
          {noblePhantasms.map(
            (np: {
              id: string;
              name: string;
              rank: string;
              card: string;
              hits: string;
              detail: string;
            }) => (
              <div
                key={np.id}
                className="bg-gray-50 p-4 rounded-lg shadow mb-4"
              >
                <h3 className="text-xl font-bold mb-1">{np.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  Rank: {np.rank} | Type: {np.card} | Hits: {np.hits}
                </p>
                <p className="text-gray-700">{np.detail}</p>
              </div>
            )
          )}
        </div>
      )}

      {/* Skills */}
      {(activeSkills.length > 0 || classSkills.length > 0) && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>

          {activeSkills.length > 0 && (
            <>
              <h3 className="text-xl font-bold mb-2">Active Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {activeSkills.map(
                  (skill: {
                    id: string;
                    name: string;
                    cooldown: string;
                    detail: string;
                  }) => (
                    <div
                      key={skill.id}
                      className="bg-gray-50 p-4 rounded-lg shadow"
                    >
                      <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-500 mb-1">
                        Cooldown: {skill.cooldown}
                      </p>
                      <p className="text-gray-700">{skill.detail}</p>
                    </div>
                  )
                )}
              </div>
            </>
          )}

          {classSkills.length > 0 && (
            <>
              <h3 className="text-xl font-bold mb-2">Class Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {classSkills.map(
                  (skill: { id: string; name: string; detail: string }) => (
                    <div
                      key={skill.id}
                      className="bg-gray-50 p-4 rounded-lg shadow"
                    >
                      <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
                      <p className="text-gray-700">{skill.detail}</p>
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* Profile / Lore */}
      {servant.profile && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Profile / Lore</h2>
          <p className="text-gray-700 whitespace-pre-line">{servant.profile}</p>
        </div>
      )}
    </Container>
  );
}
