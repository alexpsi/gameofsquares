import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux'
import { GameActions } from 'app/actions/game';
import { ThemeSelector } from 'app/components/ThemeSelector';
import { Container } from 'app/components/Container'
import { Theme } from 'app/constants/palette'

export namespace Settings {
  export interface Props {
    theme: Theme,
    actions: {
      setBackground: typeof GameActions.setBackground,
      goHome: typeof GameActions.goHome,
    }
  }
}

@connect(
  (state) => ({
    theme: state.game.theme,
  }),
  (dispatch: Dispatch): Pick<Settings.Props, 'actions'> => ({
    actions: bindActionCreators({
      setBackground: GameActions.setBackground,
      goHome: GameActions.goHome
    }, dispatch)
  })
)
export class Settings extends React.Component<Settings.Props> {
  render() {
    const { setBackground, goHome } = this.props.actions;
    const { theme } = this.props;
    return (
      <Container>
        <h1>Settings</h1>
        <ThemeSelector theme={theme} setBackground={setBackground} />
        <div style={{ marginTop: '7vh', textAlign: 'center'}} onClick={e => { goHome() }}>Back</div>
      </Container>
    )
  }
}
