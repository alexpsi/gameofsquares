import * as React from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { bindActionCreators } from 'redux';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components'
import { HighScoreModel } from 'app/models';
import { RootState } from 'app/reducers';
import { GameActions } from 'app/actions/game';

export namespace HighScores {
  export interface StateProps {
    highScores: HighScoreModel[]
  }
  export interface DispatchProps {
    goHome: typeof GameActions.goHome,
  }
  export type Props = StateProps & DispatchProps
}

const ScoresContainer = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  width: 80vw;
  max-width: 72vh;
  height: 80vw;
  max-height: 72vh;
  text-align: center;
`

const Score = posed.li({
  preenter: { opacity: 0, x: -100 },
  enter: { opacity: 1, delay: ({ delay }: any) => delay * 650 + 200, x: 0 },
})

@connect(
  (state: RootState): HighScores.StateProps => ({
    highScores: state.highScores
  }),
  (dispatch: ThunkDispatch<{}, {}, any>): HighScores.DispatchProps => bindActionCreators({
    goHome: GameActions.goHome,
  }, dispatch)

)
export class HighScores extends React.Component<HighScores.Props> {
  render() {
    const { highScores, goHome } = this.props;
    return (
      <ScoresContainer>
        <h1>Hall of Fame</h1>
        <ul>
          <PoseGroup animateOnMount={true} preEnterPose={'preenter'}>
            { highScores.map(( highScore, idx ) => (
                <Score delay={idx+1} key={idx}>{ highScore.initials.toUpperCase() } - { highScore.score }pts @ { highScore.time }s</Score>
            )) }
          </PoseGroup>
        </ul>
        <div style={{ display: 'block', marginTop: '5vh', textAlign: 'center'}} onClick={e => { goHome() }}>Back</div>
      </ScoresContainer>
    )
  }
}
