export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('такой объект уже существует в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((elem) => this.members.add(elem));
  }

  toArray() {
    return Array.from(this.members);
  }
}
