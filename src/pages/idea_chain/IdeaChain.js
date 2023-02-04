import React from 'react';
import { Chrono } from 'react-chrono';

function IdeaChain() {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'https://www.w3schools.com/images/w3schools_green.jpg',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://www.w3schools.com/images/w3schools_green.jpg',
        },
      },
    },
    {
      title: 'May 1950',
      cardTitle: 'DDD',
      url: 'https://www.w3schools.com/images/w3schools_green.jpg',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://www.w3schools.com/images/w3schools_green.jpg',
        },
      },
    },
  ];
  return (
    <div style={{ width: '500px', height: '900px' }}>
      <Chrono items={items} />
    </div>
  );
}

export default IdeaChain;
