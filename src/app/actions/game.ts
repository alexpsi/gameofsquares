import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { push } from 'connected-react-router'
import { checkScore } from 'app/reducers/high-score';

export namespace GameActions {
  export enum Type {
    NEW_GAME = 'NEW_GAME',
    CLICK_PANEL = 'CLICK_PANEL',
    SET_OUTCOME = 'SET_OUTCOME',
    SET_BACKGROUND = 'SET_BACKGROUND',
  }

  export const setOutcome = (outcome: string): any => ({
    type: Type.SET_OUTCOME, outcome
  })

  export const setBackground = (color: string): any => ({
    type: Type.SET_BACKGROUND, color
  })

  export const goHome = (): any => push('/')

  export const newGame = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => new Promise<void>(
      (resolve) => {
        dispatch({ type: Type.NEW_GAME })
        dispatch(push('/game'))
      }
    )

  export const clickPanel = (x: number, y: number): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any): Promise<void> => new Promise<void>(
      (resolve) => {
        dispatch({ type: Type.CLICK_PANEL, payload: [ y, x ] })
        dispatch(push('/game'))
        const { lost, score, elapsed } = getState().game
        if (lost) {
          // stopGameTimer();
          setTimeout(() => {
            const outcome = checkScore(getState().highScores, score, elapsed) ? 'HIGH_SCORE' : 'DEFEAT'
            dispatch({ type: Type.SET_OUTCOME, outcome })
          }, 1000)
        }
      }
    )
}

export type GameActions = Omit<typeof GameActions, 'Type'>





