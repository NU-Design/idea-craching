import { async } from '@firebase/util';
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
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const result = docSnap.data();
      console.log('Document Data:', result);
      return result;
    } else {
      console.log('No such document');
    }
  } catch (error) {
    console.log('Error GetUserbyId', error.message);
  }
};

export const GetUserRole = async (id) => {
  const docRef = doc(db, 'users', id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const result = docSnap.data();
      console.log('GetUserRole Data:', result.role);
      return result.role;
    } else {
      console.log('No such document');
    }
  } catch (error) {
    console.log('Error GetUserbyId', error.message);
  }
};
