import React from 'react';
import { Chrono } from 'react-chrono';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import MarkdownViewer from '../markdown_viewer/MarkdownViewer';

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/logo.png?alt=media&token=9c8cd5a4-792b-4835-aee3-68fa2641acec';

function IdeaChain() {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: LOGO,
      cardSubtitle: 'brief1',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: LOGO,
        },
      },
    },
    {
      title: 'May 1950',
      cardTitle: 'DDD',
      url: LOGO,
      cardSubtitle: 'brief2',
      media: {
        type: 'IMAGE',
        source: {
          url: LOGO,
        },
      },
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ width: '100%', height: '85vh' }}>
        <Chrono items={items}>
          {items.map((item, index) => (
            <div style={{ width: '100%' }}>
              <hr />
              <MarkdownViewer />
            </div>
          ))}
        </Chrono>
      </div>
    </>
  );
}

export default IdeaChain;
