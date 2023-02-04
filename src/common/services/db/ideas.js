import { db } from '../../utils/firebase/firebase.util';

import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from 'firebase/firestore';

// CRUD
// Add an idea 
export const addIdea = async (userAuth, ) => {
  return null;
};

// Return all ideas created by a user
export const getIdeasByUserId = async () => {
  const data = "h8WAnPAHfhSgYlObbb6C";
  // const coll = collection(db, 'ideas');
  // const q = query(collection(db, 'ideas'), where('idea_id', '==', data));
  // const docSnap = await getDocs(q);
  
  // TODO: Keep as a record for single document func
  // getDocs(q).then(docSnap => {
  //   console.log("snap ", docSnap);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  //   return -1;
  // });

  try {
    console.log("HERE");


    const docRef = doc(db, "idea_id", data);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    
    // db.collection("ideas").where("idea_id", "==", data)
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });


    return -3;

    // getDocs(q).then(docSnap => {
    //   console.log("SIZE: ", docSnap.size());

    //   docSnap.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });

    //   return -1;
    // });

  } catch (err) {
    console.error("Exception: ", err);
  } finally {
    return -2;
  }
};

// FIXME
// Return the idea matching the ideaId
export const getIdeaByIdeaId = async (ideaId=121) => {
  // const ref = collection(db, 'ideas');
  const q = query(collection(db, 'ideas'), where("idea_id", "==", ideaId));
  console.log("A");
  const qSnap = await getDocs(q);

  console.log("B");

  if(qSnap.exists()) {
    console.log(qSnap.data());
    return 0;
  } else {
    console.error(`Idea document for idea_id=${ideaId} does not exist`);
    return -1;
  }
  
};

// Return the ideas sharing the same ancestorId
export const getIdeaByAncestorId = async() => {
  return null;
}

// TODO: Placeholders for now
export const updateIdea = async () => {
  return null;
};

// TODO: Placeholders for now
export const deleteIdea = async () => {
  return null;
};

