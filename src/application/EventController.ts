import { Event } from "../domain/Event";
import { StorageService } from "../infrastructure/storageService";

export class EventController {
  static addEvent(event: Event): void {
    StorageService.saveEvent(event);
    this.loadEvents();
  }

  static loadEvents(): Event[] {
    return StorageService.getEvents();
  }

  static deleteEvent(index: number): void {
    StorageService.deleteEvent(index);
    this.loadEvents();
  }
}
