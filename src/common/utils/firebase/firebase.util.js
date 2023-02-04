import { initializeApp } from 'firebase/app';

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
  documentId
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCunp1d90LucZ_bNKd4HCg-fD729Aj1SFU',
  authDomain: 'idea-crashing.firebaseapp.com',
  projectId: 'idea-crashing',
  storageBucket: 'idea-crashing.appspot.com',
  messagingSenderId: '477375860047',
  appId: '1:477375860047:web:b139ac3eda73d5cecfc93a',
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const connectIdeas = async () => {
  const coll = collection(db, 'ideas');
  const snap = await getDocs(coll);
  console.log("SNAPPP");

  const ls = snap.docs.map(doc => doc.data());
  console.log("list", ls);
  return 0;
} ;

export const connectIdeas2 = async () => {
  const docRef = doc(db, "ideas", "h8WAnPAHfhSgYlObbb6C");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return 0;
  } else {
    console.log("No such document!");
    return -1;
  }
} ;