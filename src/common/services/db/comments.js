import { db } from '../../utils/firebase/firebase.util';
import { getDocs, collection, where, query, addDoc } from 'firebase/firestore';

export const addComment = async (data) => {
  const docRef = await addDoc(collection(db, 'comments'), data);
  return docRef;
};

export const getAllCommentsByIdeaId = async (ideaId) => {
  console.log('Start');
  const q = query(
    collection(db, 'comments'),
    where('original_idea_id', '==', ideaId),
  );
  try {
    const querySnapshot = await getDocs(q);
    const result = {};
    querySnapshot.forEach((doc) => {
      result[doc.comments_id] = doc.data();
      console.log(doc.comments_id, ' => ', doc.data());
    });
    return result;
  } catch (error) {
    console.log('getAllCommentsByIdeaId Data:', error.message);
  }
};
