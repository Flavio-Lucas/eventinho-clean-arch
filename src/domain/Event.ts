export class Event {
  constructor(event?: Event) {
    this.name = event?.name || '';
    this.description = event?.description;
    this.date = event?.date || '';
    this.timeStart = event?.timeStart || '';
    this.timeEnd = event?.timeEnd;
    this.observation = event?.observation;
    this.color = event?.color || '#FD7941';
  }

  public name!: string;
  public description?: string;
  public date!: string;
  public timeStart!: string;
  public timeEnd?: string;
  public observation?: string;
  public color!: string;
}
