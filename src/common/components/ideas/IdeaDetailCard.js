/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import "../../style/ideaDetail.css";

import { getIdeaDetailByIdeaId } from '../../services/db/ideaDetails';

function IdeaDetailCard() {
  useEffect(() => {
    const id = "LGcx9tOBE9UwHhwJT3Ux";
    const fetchdata = async () => {
      const result = await getIdeaDetailByIdeaId(id);
      console.log('fres: ', result);

    };

    fetchdata();    
  });

  return (
  <div className="container ideaDetailCard" >
      <img id="ideaDetailMedia" src="https://i.imgur.com/3xhQ54s.jpeg" />
      <h2>std</h2>
      
  </div>);
}

export default IdeaDetailCard;