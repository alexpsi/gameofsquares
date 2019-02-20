import * as chroma from 'chroma-js';

const getRandom = (max: number) => Math.floor(Math.random() * max)

const generateGrid = (level: number, x: number, y: number, baseColor: string, alternateColor: string) =>
  Array(level + 1).fill(0).map( (_, idy) =>
    Array(level + 1).fill(0).map( (_, idx) =>
      idx === x && idy === y ? alternateColor : baseColor
    )
  )

export const generateLevel = (theme: string[], level: number, previousColor: string) => {
  if (!previousColor) previousColor = theme[0];
  const _PALETTE = theme.filter(color => color !== previousColor)
  const baseColor = _PALETTE[getRandom(_PALETTE.length)];
  const alternateColor = chroma(baseColor).saturate(3).hex();
  const answer = [getRandom(level + 1), getRandom(level + 1)]
  return {
    answer,
    baseColor,
    alternateColor,
    grid: generateGrid(level, answer[0], answer[1], baseColor, alternateColor)
  }
}
