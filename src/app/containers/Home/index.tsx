import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GameActions } from 'app/actions/game';
import { Container } from 'app/components/Container'
import styled from 'styled-components'

export namespace Home {
  export interface Props {
    actions: {
      newGame: typeof GameActions.newGame;
    }
  }
}

const HomeButton = styled.div`
  margin-top: 5vh;
  color: black;
  text-decoration: none;
  marginRight: 2vw;
`

@connect(
  null,
  (dispatch: Dispatch): Pick<Home.Props, 'actions'> => ({
    actions: bindActionCreators({
      newGame: GameActions.newGame,
    }, dispatch)
  })
)
export class Home extends React.Component<Home.Props> {
  render() {
    const { newGame }  = this.props.actions;
    return (
      <Container>
        <h1>A game of squares</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'  }}>
          <HomeButton id="newGame" onClick={e => { newGame() }}>New game</HomeButton>
          <Link to="/settings" style={{ marginRight: '1vw', marginLeft: '1vw'}}><HomeButton>Settings</HomeButton></Link>
          <Link to="/high-scores"><HomeButton>Scores</HomeButton></Link>
        </div>
      </Container>
    )
  }
}
