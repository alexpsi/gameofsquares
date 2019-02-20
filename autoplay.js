import { Selector } from 'testcafe';

const tLevel = [...Array(60).keys()];
const playButton = Selector('#newGame');
const score      = Selector('#score');
const correctBtn = Selector('#correct');

fixture `Game of Squares`
    .page `http://localhost:3000`;

test('Autoplay until level 60', async t => {

  await t
    .click(playButton)
    .wait(1000)
    .expect(score.textContent).eql('0pts') // Check result

  for (const item of tLevel) {
    await t
      .click(correctBtn)
      .wait(500)
      .expect(score.textContent).eql(`${item + 1}pts`)
  }

});
