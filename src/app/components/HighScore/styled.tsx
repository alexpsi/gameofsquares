import * as React from 'react'
import styled from 'styled-components'
import SplitText from 'react-pose-text'

const HighScoreHeader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 6vw;
`;

const charPoses = {
  exit: { opacity: 0.8, y: 70 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }: any) => charIndex * 30 + Math.random() * 30,
    transition: {
      ease: 'backOut',
      duration: 700,
      flip: 1000
    }
  }
}

export const HighScoreBanner = () => (
  <HighScoreHeader>
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
      New high score!!
    </SplitText>
  </HighScoreHeader>
)

export const HighScoreInput = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 3vw;
`;

export const Input = styled.input.attrs({
  type: 'text',
  size: 3,
  maxLength: 3,
  autoFocus: true,
  placeholder: 'BOB'
})`
  background-color: transparent;
  font-size: 3vw;
`
