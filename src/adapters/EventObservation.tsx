import React from "react";
import { Event } from "../domain/Event";

interface EventObservationComponentProps {
  event: Event;
}

const EventObservation: React.FC<EventObservationComponentProps> = ({ event }) => {
  return (
    <>
      <span>{new Date(event.date).toLocaleDateString('pt-br', {day: '2-digit', month: '2-digit'})}</span>
      <p>{event.observation}</p>
    </>
  );
}

export default EventObservation;