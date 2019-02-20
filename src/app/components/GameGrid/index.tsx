import * as React from 'react'
import { Cell, GridContainer, FlexRow } from './styled'
import { GameActions } from 'app/actions/game';

export namespace GameGrid {
  export interface Props {
    lost: boolean;
    grid: string[][];
    answer: number[];
    clickPanel: typeof GameActions.clickPanel;
  }
}

export const GameGrid = ({ lost, grid, clickPanel, answer=[] }: GameGrid.Props) => (
	<GridContainer lost={lost}>
		{ grid.map((row, i) => (
			<FlexRow key={i}>
        { row.map((color, j) => (<Cell
          id={answer.join(',') === `${j},${i}` ? 'correct' : null} // QA
          key={`${i},${j}`}
          color={color}
          lost={lost}
          onClick={(e: any) => { clickPanel(i,j); }}
        />))}
			</FlexRow>
		))}
	</GridContainer>
)

