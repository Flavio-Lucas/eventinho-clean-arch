import React, { useState } from "react";
import { Event } from "../domain/Event";
import { EventController } from "../application/EventController";
import ColorPicker from "./ColorPicker";
interface EventFormComponentProps {
  refreshEventList: () => void,
}
const EventForm: React.FC<EventFormComponentProps> = ({ refreshEventList }) => {
  const [event, setEvent] = useState<Event>(new Event());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleColorChange = (color: string) => {
    setEvent({ ...event, color });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    EventController.addEvent(event);
    refreshEventList();
    setEvent({
      name: "",
      description: "",
      date: "",
      timeStart: "",
      timeEnd: "",
      observation: "",
      color: "#FD7941"
    });
  };

  return (
    <form id="eventForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome do Evento*:</label>
        <input type="text" name="name" value={event.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrição (opcional):</label>
        <textarea name="description" rows={4} value={event.description} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="date">Data*:</label>
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="timeStart">Horário de Início*:</label>
        <input type="time" name="timeStart" value={event.timeStart} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="timeEnd">Horário de Término (opcional):</label>
        <input type="time" name="timeEnd" value={event.timeEnd} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="observation">Observação (opcional):</label>
        <input type="text" name="observation" value={event.observation} onChange={handleChange} placeholder="Ex: Cheguem 15 minutos antes" />
      </div>

      <ColorPicker
          selectedColor={event.color}
          onChange={handleColorChange}
        />

      <button type="submit">Adicionar Evento</button>
    </form>
  );
};

export default EventForm;
