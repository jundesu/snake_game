import {gameOver, width, height} from '../Game';

it('game over', () => {
  expect(gameOver([9,4],[[10,4], [11,4], [12,4]])).toBeFalsy();
  expect(gameOver([12,4],[[10,4], [11,4], [12,4]])).toBeTruthy();
  expect(gameOver([width,height],[[10,4], [11,4], [12,4]])).toBeTruthy();

})