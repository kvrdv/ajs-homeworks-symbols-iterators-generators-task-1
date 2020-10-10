import Person from './person';
import Team from './team';

const player1 = new Person({
  name: 'Роберт',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player2 = new Person({
  name: 'Энн',
  type: 'Driver',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player3 = new Person({
  name: 'Джонни',
  type: 'Translater',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player); //eslint-disable-line
}
