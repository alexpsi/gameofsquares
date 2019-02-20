import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from 'app/reducers';
import { GameActions } from 'app/actions/game';
import { HighScoreActions } from 'app/actions/high-scores';
import { GameGrid } from 'app/components/GameGrid';
import { Hud } from 'app/components/Hud';
import Tray from 'app/components/Tray';
import HighScore from 'app/components/HighScore';
import GameOver from 'app/components/GameOver';

export namespace Game {
  export interface StateProps {
    score: number,
    level: number,
    grid: string[][],
    answer: number[],
    lost: boolean,
    started: boolean,
    startTime?: number,
    outcome?: string
    background: string
  }
  export interface DispatchProps {
    newGame: typeof GameActions.newGame,
    goHome: typeof GameActions.goHome,
    clickPanel: typeof GameActions.clickPanel,
    addHighScore: typeof HighScoreActions.addHighScore
  }
  export type Props = StateProps & DispatchProps
}

@connect(
  ({ game }: RootState) => ({
    score: game.score,
    level: game.level,
    grid: game.grid,
    answer: game.answer,
    lost: game.lost,
    started: game.started,
    startTime: game.startTime,
    outcome: game.outcome,
    background: game.background
  }),
  (dispatch: ThunkDispatch<{}, {}, any>): Game.DispatchProps => bindActionCreators({
    newGame: GameActions.newGame,
    goHome: GameActions.goHome,
    clickPanel: GameActions.clickPanel,
    addHighScore: HighScoreActions.addHighScore,
  }, dispatch)
)

export class Game extends React.Component<Game.Props> {
  render() {
    const { started, grid, answer, clickPanel, lost, score, startTime, newGame, goHome, outcome, addHighScore}  = this.props;
    if (!started) return null;
    return (
      <React.Fragment>
        <GameGrid grid={grid} answer={answer} clickPanel={clickPanel} lost={lost} key="grid" />
        <Hud score={score} starttime={startTime} lost={lost} />
        { outcome === 'DEFEAT' ? <GameOver>You lose!</GameOver> : null }
        { outcome === 'HIGH_SCORE' ? <HighScore
          addHighScore={addHighScore}
          score={score}
          time={Math.floor((Date.now() - (startTime || 0)) / 1000)}
        /> : null }
        <Tray newGame={newGame} goHome={goHome} />
      </React.Fragment>
    )
  }
  constructor(props: Game.Props) {
    super(props);
    if (!props.started) props.newGame();
  }

}
