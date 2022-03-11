import { Cigarette, CigaretteMetadata } from "../../types/cigarette";
import { datesAreOnSameDay } from "../../utils/datesAreOnSameDay";

const getOrInitCigaretteMetadata = (): CigaretteMetadata => {
  const stored = localStorage.getItem("data.cigarettes");

  const today = new Date();

  if (!stored) {
    const metadata: CigaretteMetadata = {
      entries: [],
      date: today,
    };

    localStorage.setItem("data.cigarettes", JSON.stringify(metadata));

    return metadata;
  }

  const metadata: CigaretteMetadata = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    localStorage.getItem("data.cigarettes")!
  ) as CigaretteMetadata;

  if (!datesAreOnSameDay(today, new Date(metadata.date))) {
    const metadata: CigaretteMetadata = {
      entries: [],
      date: today,
    };

    localStorage.setItem("data.cigarettes", JSON.stringify(metadata));

    return metadata;
  }

  return metadata;
};

export const retrieveCigarettes = (
  date: "today" | "yesterday"
): Cigarette[] => {
  const data: CigaretteMetadata = getOrInitCigaretteMetadata();

  return data.entries;
};

export const insertCigarette = (): Cigarette[] => {
  const data: CigaretteMetadata = getOrInitCigaretteMetadata();

  data.entries.push({
    createdAt: new Date(),
  });

  localStorage.setItem("data.cigarettes", JSON.stringify(data));

  return data.entries;
};
