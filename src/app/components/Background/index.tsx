import posed from 'react-pose'
import styled from 'styled-components'

export const Background = styled(posed.div({
  enter: {
    background: ({color}: any) => color,
    transition: { default: { ease: 'easeOut', duration: 700 } },
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`;
