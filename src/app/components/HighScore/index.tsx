import * as React from 'react'
import { HighScoreActions } from 'app/actions/high-scores'
import { HighScoreBanner, HighScoreInput, Input } from './styled'

export namespace HighScore {
  export interface Props {
    score: number;
    time: number;
    addHighScore: typeof HighScoreActions.addHighScore;
  }
}

const HighScore = ({score, time, addHighScore}: HighScore.Props) => (
  <React.Fragment>
    <HighScoreBanner />
    <HighScoreInput>
      <p>Enter your initials:</p>
      <Input onKeyDown={(e: any) => {
        if (e.key === 'Enter' && e.target.value) {
          e.preventDefault();
          addHighScore(score, time, e.target.value)
        }
      }}/>
    </HighScoreInput>
  </React.Fragment>
)

export default HighScore;
