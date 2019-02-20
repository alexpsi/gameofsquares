import posed from 'react-pose'
import styled from 'styled-components'

export const GridContainer = styled(posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}))`
    margin: 0 auto;
    margin-top: 10vh;
    width: 80vw;
    max-width: 72vh;
    height: 80vw;
    max-height: 72vh;
    font-size: 1rem;
    ${props => `box-shadow: 20px 20px ${props.lost ? 'transparent' : 'rgba(10,10,10, 0.4)'};`}
`;

export const FlexRow = styled.div`
    display: flex;
`;

export const Cell = styled(posed.div({
    pressable: true,
    init: { scale: 1},
    press: {
        scale: 0.9,
        transition: { default: { ease: 'easeOut', duration: 400 } }
    }
}))`
    margin: 2px;
    color: white;
    font-weight: bold;
    flex: 1 0 auto;
    position: relative;
    ${props => `
        box-shadow: 3px 3px ${props.lost ? 'transparent' : 'black'};
        background: ${props.color};
    `}
    :after {
        content: "";
        float:left;
        display: block;
        padding-top: 100%;
    }
`;
