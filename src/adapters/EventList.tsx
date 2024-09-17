import React from "react";
import html2canvas from 'html2canvas';
import { EventController } from "../application/EventController";
import { Event } from "../domain/Event";
import EventTable from "./EventTable";
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

interface EventListComponentProps {
  refreshEventList: () => void,
  events: Event[],
}

const EventList: React.FC<EventListComponentProps> = ({ refreshEventList, events }) => {
  const handleGenerateImage = () => {
    const content = document.getElementById('content');
  
    if (content) {
      hideRemoveButtons(); // Ocultar botões antes de gerar a imagem
  
      html2canvas(content).then(async (canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const base64Data = imgData.split(',')[1];
  
        try {
          const savedFile = await Filesystem.writeFile({
            path: 'evento.png',
            data: base64Data,
            directory: Directory.Documents,
            recursive: true,
          });

          await Share.share({
            files: [savedFile.uri]
          });
          alert('Imagem salva com sucesso!');
        } catch (e) {
          try {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'evento.png';
            link.click();
          } catch {
            console.error('Erro ao salvar a imagem: ', e);
          }
        } finally {
          showRemoveButtons(); // Mostrar botões após gerar a imagem
        }
      });
    }
  };
  

  const hideRemoveButtons = () => {
    const removeButtons = document.querySelectorAll('.event-card button');
    removeButtons.forEach(button => button.setAttribute('style', 'display: none !important;'));
  };

  const showRemoveButtons = () => {
    const removeButtons = document.querySelectorAll('.event-card button');
    removeButtons.forEach(button => button.removeAttribute('style'));
  };

  const handleDelete = (index: number) => {
    EventController.deleteEvent(index);
    refreshEventList();
  };

  return (
    <>
      <div id="content">
        <h2>{new Date().toLocaleDateString('pt-br', {month: 'long'})} <span>{new Date().getFullYear()}</span></h2>
        <EventTable events={events} handleDelete={handleDelete}/>
      </div>
      <button onClick={handleGenerateImage}>GERAR IMAGEM</button>
    </>
  );
};

export default EventList;
