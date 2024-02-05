export interface Skill {
  _id: string;
  name: string;
}

export class Bid {
  _id: string = "";
  content: string = "";
  skillSets: Array<Skill> = [];

  constructor(initializer?: any) {
    if (!initializer === null) return;
    if (initializer._id) this._id = initializer._id;
    if (initializer.content) this.content = initializer.content;
    if (initializer.skillSets) this.skillSets = initializer.skillSets;
  }
}
