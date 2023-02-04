import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import MarkdownViewer from '../markdown_viewer/MarkdownViewer';
import { getIdeasByAncestorId } from '../../common/services/db/ideas';

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/logo.png?alt=media&token=9c8cd5a4-792b-4835-aee3-68fa2641acec';

const itemsDemo = [
  {
    title: 'Jan 1st 2023',
    cardTitle: 'Regarding Refactoring Redux',
    url: LOGO,
    cardSubtitle: 'I plan to refactor all states into redux states and reducers',
    media: {
      type: 'IMAGE',
      source: {
        url: LOGO,
      },
    },
    mdText: '# A sample original JavaScript code is shown here:\n\n~~~js\nsetItems(newVal);\nconsole.log("New Value", newVal);\n~~~\n',
  },
  {
    title: 'Jan 24ed 2023',
    cardTitle: 'I suggest you refactor this way',
    url: LOGO,
    cardSubtitle: 'I wrote some code for you.',
    media: {
      type: 'IMAGE',
      source: {
        url: LOGO,
      },
    },
    mdText: '# A sample original JavaScript code is shown here：\n\n~~~js\ndispatch(action: "UI/setNewItems", payload(newVal));\nconsole.log("New Value", newVal);\n~~~\n',
  },
];

function IdeaChain() {
  const [items, setItems] = useState([]);

  const asyncGetChainedIdeas = async () => {
    let data = await getIdeasByAncestorId('down-iid');

    // // const data = await getIdeasByAncestors;
    data.forEach((element) => {
      return {
        title: element['timestamp'] ? element['timestamp'] : 'TBD',
        cardTitle: element['title'] ? element['title'] : '',
        url: element['url'] ? element['url'] : '',
        cardSubtitle: element['brief'] ? element['brief'] : '',
        media: {
          type: 'IMAGE',
          source: {
            url: element['media']['source'] ? element['media']['source'] : LOGO,
          },
        },
        mdText: element['details'] ? element['details'] : '',
      };
    });
    setItems([...data]);
    console.log('items:', items);
  };

  useEffect(() => {
    asyncGetChainedIdeas();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ width: '100%', height: '85vh' }}>
        <Chrono items={itemsDemo}>
          {itemsDemo.map((item, index) => {
            console.log('Item to be renderd:', item);
            return (
              <div key={index} style={{ width: '100%' }}>
                <hr />
                <MarkdownViewer markdown={item.mdText} />
              </div>
            );
          })}
        </Chrono>
      </div>
    </>
  );
}

export default IdeaChain;
