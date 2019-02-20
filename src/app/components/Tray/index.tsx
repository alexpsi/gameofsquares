import * as React from 'react'
import styled from 'styled-components'
import { GameActions } from 'app/actions/game';
import refreshIcon from './refresh.png'
import closeIcon from './erase.png'

const TrayContainer = styled.div`
    position: absolute;
    right: 1vw;
    top: 1vh;
    width: 3vw;
    height: 3vh;
`;

export namespace Tray {
  export interface Props {
    newGame: typeof GameActions.newGame;
    goHome: typeof GameActions.goHome;
  }
}

const Tray = ({ newGame, goHome }: Tray.Props) => (
  <React.Fragment>
    <TrayContainer>
    <img
          src={closeIcon}
          alt="Close"
          onClick={(e) => {
              e.preventDefault();
              newGame();
              goHome();
          }}
      />
      <img
          src={refreshIcon}
          alt="Refresh"
          onClick={(e) => {
              e.preventDefault();
              newGame();
          }}
      />
    </TrayContainer>
  </React.Fragment>
)

export default Tray;
