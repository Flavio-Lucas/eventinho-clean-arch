import { Event } from "../domain/Event";

export class StorageService {
  private static readonly STORAGE_KEY = "events";

  static saveEvent(event: Event): void {
    const events = this.getEvents();
    events.push(event);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }

  static getEvents(): Event[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]");
  }

  static deleteEvent(index: number): void {
    const events = this.getEvents();
    events.splice(index, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }
}
