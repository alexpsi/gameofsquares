import * as React from 'react'
import { TimerContainer, HighScoreContainer, Inner } from './styled'
import FitText from '@kennethormandy/react-fittext'

export namespace Hud {
  export interface Props {
    score: number;
    starttime?: number;
    lost: boolean;
  }
}

export class Hud extends React.Component<Hud.Props> {

  timer: any;
  componentDidMount() {
    this.timer = setInterval(() => { if (!this.props.lost) this.forceUpdate() }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { score, starttime } = this.props;
    const elapsed = starttime ? Math.floor((Date.now() - starttime) / 1000) : 0;
    return (
      <React.Fragment>
        <TimerContainer>
          <FitText compressor={0.6}>
            <Inner>{elapsed}s</Inner>
          </FitText>
        </TimerContainer>
        <HighScoreContainer>
          <FitText compressor={0.6}>
            <Inner id="score">{ score }pts</Inner>
          </FitText>
        </HighScoreContainer>
      </React.Fragment>
    )
  }

}
