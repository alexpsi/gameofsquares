import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { push } from 'connected-react-router'

export namespace HighScoreActions {
  export enum Type {
    LOAD_HIGHSCORES = 'LOAD_HIGHSCORES',
    ADD_HIGHSCORE = 'ADD_HIGHSCORE'
  }

  export const loadHighScores = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => new Promise<void>(
      (resolve) => {
        dispatch({ type: Type.LOAD_HIGHSCORES })
        resolve();
      }
    )

  export const addHighScore = (score: number, time: number, initials: string ): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => new Promise<void>(
      (resolve) => {
        dispatch({
          type: Type.ADD_HIGHSCORE,
          payload: {
            score: score,
            time: time,
            initials: initials
          }
        })
        dispatch(push('/high-scores'))
        resolve();
      }
    )
  }

export type HighScoreActions = Omit<typeof HighScoreActions, 'Type'>
