import React from "react";
import EventCard from "./EventCard";
import { Event } from '../domain/Event'
import EventObservation from "./EventObservation";
import LogoPJ from '../pj-logo.png'
interface EventTableComponentProps {
  events: Event[],
  handleDelete: (index: number) => void
}

const EventTable: React.FC<EventTableComponentProps> = ({ events, handleDelete }) => {


  const rowsToDisplay = events.length >= 5 ? events : [...events, ...Array(5 - events.length).fill(null)];

  return (
    <table>
      <thead>
        <tr>
          <th>Eventos</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {rowsToDisplay.map((event, index) => (
          event != null ?
            <tr key={event.name + event.description + event.date}>
              <td>
                <EventObservation event={event} />
              </td>
              <td>
                <EventCard key={index} event={event} index={index} onDelete={handleDelete} />
              </td>
              <td>
                {/* Espaço em branco no final da tabela */}
              </td>
            </tr>
            :
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        ))}
        <tr>
          <td></td>
          <td>
            <img src={LogoPJ} alt="logo do porão jovem"/>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default EventTable;