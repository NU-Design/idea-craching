import { db } from '../../utils/firebase/firebase.util';
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

export const addIdeaDetail = async (data) => {
  const docRef = await addDoc(collection(db, "ideaDetails"), data);
  return docRef;
}

export const getIdeaDetailByIdeaId = async (ideaDetailId) => {
  const ref = doc(db, "ideaDetails", ideaDetailId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();
    return data;
  } else {
    console.log(`Document with idea_detail_id=${ideaDetailId} not found.`);
    return "GGGG";
  }
}

// db.collection("users").doc(doc.id).update({foo: "bar"});