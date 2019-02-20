import { HighScoreActions } from './high-scores'

const initialize = (dispatch:any) => {
  dispatch(HighScoreActions.loadHighScores())
}

export default initialize;
