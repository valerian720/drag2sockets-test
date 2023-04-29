export class Work {
  text: string;
  isPriority: boolean;
  //
  constructor(text = "", isPriority = false) {
    this.text = text;
    this.isPriority = isPriority;
  }
}
