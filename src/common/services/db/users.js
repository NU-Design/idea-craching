import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

import { db } from '../../utils/firebase/firebase.util';

export const GetAllUser = async () => {
  console.log('GetAllUser auth.js line 28');
  const querySnapshot = await getDocs(collection(db, 'users'));
  console.log(querySnapshot);
  return querySnapshot;

  //   forEach((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //   });
};

export const GetUserbyId = async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document Data:', docSnap.data());
  } else {
    console.log('No such document');
  }
  return;
};
