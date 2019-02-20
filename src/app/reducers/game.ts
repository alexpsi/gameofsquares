import { GameModel } from 'app/models/GameModel'
import { GameActions } from 'app/actions/game';
import { PALETTES } from 'app/constants/palette';
import { generateLevel } from './game-helpers'

const initialState: GameModel = {
  theme: 'vapor',
  started: false,
  lost: false,
  level: 1,
  score: 0,
  background: PALETTES.vapor[0],
};

export const gameReducer = (state = initialState, action: any): GameModel => {
  const PALETTE = PALETTES[state.theme];
  switch (action.type) {
    case GameActions.Type.NEW_GAME:
      return {
        theme: state.theme,
        started: true,
        lost: false,
        level: 1,
        score: 0,
        background: PALETTE[0],
        startTime: Math.round(new Date().getTime()),
        ...generateLevel(PALETTE, 1, PALETTE[0])
      }

    case GameActions.Type.CLICK_PANEL:
      if (!state.answer || !state.baseColor) return state;
      if (action.payload.join(',') === state.answer.join(',') && !state.lost) {
        return {
          ...state,
          level: state.level + 1,
          score: state.score + 1,
          background: state.alternateColor || 'transparent',
          ...generateLevel(PALETTE, state.level + 1, state.baseColor)
        }
      } else if (state.grid) {
        return {
          ...state,
          grid: state.grid.map(
            (row, idx) => row.map((c, idy) => {
              if (action.payload.join(',') === [idy, idx].join(',')) return 'red';
              if (state.answer && state.answer.join(',') === [idy, idx].join(',')) return c;
              return 'transparent';
            })
          ),
          lost: true
        }
      } else {
        return state;
      }

    case GameActions.Type.SET_BACKGROUND:
      // @ts-ignore
      const bgColor = PALETTES[action.color][0]
      return { ...state, theme: action.color, background: bgColor }

    case GameActions.Type.SET_OUTCOME:
      return { ...state, outcome: action.outcome }

    default:
      return state
  }
}
