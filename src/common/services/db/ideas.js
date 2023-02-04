import { db } from '../../utils/firebase/firebase.util';
import { addIdeaDetail } from './ideaDetails';
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  serverTimestamp,
  addDoc
} from 'firebase/firestore';

/**
 * 
 * CRUD
 * 
*/

// Add an idea 
export const addIdea = async (data, ideaContent, userRole) => {
  // Confirm that the author id is included
  if (!data.author) {
    console.error(`Illegal data=${data}`);
  }

  // Compose JSON for ideaDetail object
  let collab = {
    "designer": [],
    "developer": [],
    "investor": [],
    "product_manager": []
  };

  if (userRole === "designer") {
    collab["designer"].push(data.author);
  } else if (userRole === "developer") {
    collab["developer"].push(data.author);
  } else if (userRole === "investor") {
    collab["investor"].push(data.author);
  } else if (userRole === "product_manager") {
    collab["product_manager"].push(data.author);
  } else {
    console.error(`Invalid userRole=${userRole}`);
  }

  const ideaDetailData = {
    content: ideaContent,
    idea_comments: [],
    tags: [],
    collaborators: collab,
  }

  const ideaDetailRef = await addIdeaDetail(ideaDetailData);

  // Compose and update idea object
  data["timestamp"] = serverTimestamp();
  data["details"] = ideaDetailRef.id;

  const docRef = await addDoc(collection(db, "ideas"), data);
  return docRef;
};

// Return the idea matching the ideaId
export const getIdeaByIdeaId = async (ideaId) => {
  const ref = doc(db, "ideas", ideaId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    // Convert to data object
    const data = snap.data();
    return data;
  } else {
    console.log(`Document with idea_id=${ideaId} not found.`);
    return null;
  }
};

// Return all ideas created by a user
export const getIdeasByUserId = async (userId) => {  
  const q = query(collection(db, 'ideas'), where('user_id', '==', userId));
  const querySnapshot = await getDocs(q);

  let cnt = 0;
  let ret = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
    ret.push(doc.data());
    cnt += 1;
  });

  console.log(`getIdeasByUserId -> count=${cnt}`);
  return ret;
};

// Return the ideas sharing the same ancestorId
export const getIdeasByAncestorId = async(ancestorId) => {
  const q = query(collection(db, 'ideas'), where('ancestor', '==', ancestorId));
  const querySnapshot = await getDocs(q);

  let cnt = 0;
  let ret = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
    ret.push(doc.data());
    cnt += 1;
  });

  console.log(`getIdeasByAncestorId -> count=${cnt}`);
  return ret;
}

// TODO: Placeholders for now
export const updateIdea = async () => {
  return null;
};

// TODO: Placeholders for now
export const deleteIdea = async () => {
  return null;
};

