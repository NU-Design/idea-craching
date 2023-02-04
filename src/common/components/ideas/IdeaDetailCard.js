/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import "../../style/ideaDetail.css";
import MarkdownViewer from '../../../pages/markdown_viewer/MarkdownViewer';

import { getIdeaDetailByIdeaId } from '../../services/db/ideaDetails';
import CollaboratorsBlock from './CollaboratorsBlock';

function IdeaDetailCard(props) {
  // props: title, detailId, media

  // const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [collaborators, setCollaborators] = useState({});
  const [commentList, setCommentList] = useState([]);
  

  useEffect(() => {
    const id = "LGcx9tOBE9UwHhwJT3Ux";
    const fetchdata = async () => {
      const data = await getIdeaDetailByIdeaId(id);
      console.log('fres: ', data);

      setContent(data["content"]);
      setCollaborators(data["collaborators"]);
      setCommentList(data["ideaComments"]);
    };

    fetchdata();    
  }, []);

  return (
  <div className="container ideaDetailCard" >
      <img id="ideaDetailMedia" src="https://i.imgur.com/3xhQ54s.jpeg" />
      <div className="wrapper">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="content">
          <MarkdownViewer content={content} />
        </div>
        <CollaboratorsBlock collaborators={collaborators} />
      </div>
      
  </div>);
}

export default IdeaDetailCard;