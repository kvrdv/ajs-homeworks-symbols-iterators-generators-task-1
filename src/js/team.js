import Person from './person';

export default class Team {
  constructor() {
    this.players = [];
    this.numberOfPlayers = 0;
  }

  add(player) {
    if (player instanceof Person) {
      this.players.push(player);
      this.numberOfPlayers += 1;
    } else {
      throw new Error('Не валидный объект!');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { players, numberOfPlayers } = this;
    return {
      next() {
        if (current < numberOfPlayers) {
          return {
            value: players[current++], //eslint-disable-line
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
