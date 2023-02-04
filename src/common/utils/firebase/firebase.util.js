import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../env';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);

export const connectIdeas = async () => {
  const coll = collection(db, 'ideas');
  const snap = await getDocs(coll);

  const ls = snap.docs.map((doc) => doc.data());
  console.log('list', ls);
  return 0;
};

export const connectIdeas2 = async () => {
  const docRef = doc(db, 'ideas', 'h8WAnPAHfhSgYlObbb6C');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return 0;
  } else {
    console.log('No such document!');
    return -1;
  }
};
