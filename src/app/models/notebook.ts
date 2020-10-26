export class Notebook {
  id: number;
  name: string;
  nbOfNotes: number;

  constructor(id: number, name: string, nbOfNotes: number) {
    this.id = id;
    this.name = name;
    this.nbOfNotes = nbOfNotes;
  }
}
