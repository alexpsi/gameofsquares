import * as React from 'react';
import { shallow } from 'enzyme';
import { GameGrid } from './index';

test('2x2 GameGrid, rendering and clicking', () => {

  const grid = [
    ['black','black'],
    ['black', 'red'],
  ]

  const answer = [1,1];
  const clickPanel = jest.fn((x,y) => null);

  const gameGrid = shallow(
    // @ts-ignore
    <GameGrid grid={grid} answer={answer} lost={false} clickPanel={clickPanel} />
  );

  expect(gameGrid.children().length).toEqual(2); // Expect two rows
  const secondRow = gameGrid.childAt(1);
  expect(secondRow.children().length).toEqual(2); // Expect two cells
  const correctCell = secondRow.childAt(1);
  expect(correctCell.prop('color')).toEqual('red');

  correctCell.simulate('click')
  expect(clickPanel.mock.calls.length).toBe(1);
  expect(clickPanel.mock.calls[0][0]).toBe(1);
  expect(clickPanel.mock.calls[0][1]).toBe(1);

});
