import Team from '../Team';

const zombie = {
  health: 100,
  level: 1,
  type: 'zombie',
};

const magician = {
  health: 100,
  level: 1,
  type: 'magician',
};

const daemon = {
  health: 100,
  level: 1,
  type: 'daemon',
};

test('корректный метод add', () => {
  const team = new Team();
  team.add(zombie);
  const result = new Set([zombie]);
  expect(team.members).toEqual(result);
});

test('некорректный метод add', () => {
  const team = new Team();
  team.add(zombie);
  expect(() => team.add(zombie)).toThrow();
});

test('метод addAll', () => {
  const team = new Team();
  team.addAll(zombie, magician, daemon, magician);
  const result = new Set([zombie, magician, daemon]);
  expect(team.members).toEqual(result);
});

test('метод toArray', () => {
  const team = new Team();
  team.addAll(zombie, magician, daemon, magician);
  const result = [zombie, magician, daemon];
  expect(team.toArray()).toEqual(result);
});
