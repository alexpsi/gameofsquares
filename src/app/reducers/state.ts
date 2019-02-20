import { HighScoreModel, GameModel } from 'app/models';
import { RouterState } from 'connected-react-router'

export interface RootState {
  highScores: RootState.HighScoreState;
  game: RootState.GameState;
  router: RouterState;
}

export namespace RootState {
  export type GameState = GameModel;
  export type HighScoreState = HighScoreModel[];
}
