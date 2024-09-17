import React, { useEffect, useState } from 'react';
import EventForm from './adapters/EventForm';
import EventList from './adapters/EventList';
import { EventController } from './application/EventController';
import { Event } from './domain/Event'
import './App.scss';

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const handleRefreshEventList = () => {
    setEvents(EventController.loadEvents())
  }

  useEffect(() => {
    setEvents(EventController.loadEvents())
  }, []);

  return (
    <div className="app">
      <header>
        <h1>GERE UMA IMAGEM <span style={{fontSize: '1rem'}}>v{process.env.REACT_APP_VERSION}</span></h1>
      </header>
      <main>
        <EventForm refreshEventList={handleRefreshEventList} />
        <EventList refreshEventList={handleRefreshEventList} events={events} />
      </main>
    </div>
  );
};

export default App;
