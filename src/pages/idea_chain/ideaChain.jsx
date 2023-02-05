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
    cardTitle: 'Officially started building a website',
    url: LOGO,
    cardSubtitle:
      'Set up a financial new website that uses crawlers to obtainsfinancial related news from multiple websties ',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/20151016045329690.jpg.source.jpg?alt=media&token=0a355673-b0e1-4879-ae24-147223133210',
      },
    },
    mdText: `# We need to grab early market shares.
Time is money.
~~~js
  // Without coder
  console.log(val);
  // With coder
  console.log("Current val is:", val);
~~~`,
  },
  {
    title: 'Jan 24ed 2023',
    cardTitle:
      'Using Sentimental analysis of reviews through machine learning will be good idea',
    url: LOGO,
    cardSubtitle: 'I collected some existent similar apps that is out.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/3.png?alt=media&token=d6e87ccc-8e06-4f6e-b4b7-9aa46812afe0',
      },
    },
    mdText: `# Here are some of the competitors:
- Github Copilot
- Tabnine
- Captain Stack
`,
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
