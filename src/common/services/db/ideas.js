import { db } from '../utils/firebase/firebase.utils';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
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
  return null;
};

// Return the idea matching the ideaId
export const getIdeaByIdeaId = async (ideaId) => {
  const ref = collection(db, 'ideas');
  const q = query(ref, where("idea_id", "==", ideaId));
  
  const qSnap = await getDoc(q);

  if(qSnap.exists()) {
    console.log(qSnap.data());
} else {
    console.error(`Idea document for idea_id=${ideaId} does not exist`);
}

  return null;
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

