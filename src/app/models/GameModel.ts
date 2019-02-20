import { Theme } from 'app/constants/palette'

export interface GameModel {
  theme: Theme;
  started: boolean;
  lost: boolean;
  level: number;
  score: number;
  background: string;
  baseColor?: string;
  alternateColor?: string;
  grid?: string[][];
  answer?: number[];
  startTime?: number;
  outcome?: string;
}
