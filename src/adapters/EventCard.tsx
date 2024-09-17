import React from "react";
import { Event } from "../domain/Event";

interface EventCardProps {
  event: Event;
  index: number;
  onDelete: (index: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, index, onDelete }) => {
  return (
    <div className="event-card" style={{ backgroundColor: `${event.color}80`, color: event.color }}>
      <h3>{event.name}</h3>
      <span>{event.timeStart} {event.timeEnd ? ' - ' + event.timeEnd : ''}</span>
      <p>{event.description}</p>
      <button onClick={() => onDelete(index)}>X</button>
    </div>
  );
};

export default EventCard;
