import { HighScoreActions } from 'app/actions/high-scores';

const HIGH_SCORES_LENGTH = 10;

export const highScoreReducer = (state = [], action: any) => {
  switch (action.type) {
    case HighScoreActions.Type.LOAD_HIGHSCORES:
      const ls = localStorage.getItem('high-scores');
      if (ls) {
        try {
          return JSON.parse(ls)
        } catch (e) { }
      }
      return [];

    case HighScoreActions.Type.ADD_HIGHSCORE:
      const newScore = {
        initials: action.payload.initials,
        score: action.payload.score,
        time: action.payload.time
      }
      const newHighScores = [...state, newScore].sort(highScoreComparator).slice(0, HIGH_SCORES_LENGTH - 1)
      localStorage.setItem('high-scores', JSON.stringify(newHighScores))
      return newHighScores;

    default:
      return state;
  }
}

const highScoreComparator = (a:any, b:any) => {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  if (a.time > b.time) return 1;
  if (a.time < b.time) return -1;
  return 0;
}

export const checkScore = (highScores: any, score: number, elapsed: number) => {
  const _hs = [...highScores, { score, time: elapsed, newScore: true }].sort(highScoreComparator)
  return _hs.length < HIGH_SCORES_LENGTH || !_hs[_hs.length - 1].newScore
}


