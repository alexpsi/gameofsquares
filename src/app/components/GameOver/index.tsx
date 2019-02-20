import posed from 'react-pose'
import styled from 'styled-components'

export const GameOver = styled(posed.div({
  enter: {
      opacity: 1
  },
  exit: { opacity: 0 },
}))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 10rem;
`;

export default GameOver;
