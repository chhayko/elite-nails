import type { CityPage } from "./types";
import { CITIES_01 } from "./cities-01";
import { CITIES_02 } from "./cities-02";
import { CITIES_03 } from "./cities-03";
import { CITIES_04 } from "./cities-04";

export type { CityPage, CitySection, CityFaq } from "./types";

export const CITIES: Record<string, CityPage> = {
  ...CITIES_01,
  ...CITIES_02,
  ...CITIES_03,
  ...CITIES_04,
};
