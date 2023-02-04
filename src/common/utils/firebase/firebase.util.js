import { initializeApp } from 'firebase/app';
import * as dotenv from 'dotenv';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from 'firebase/firestore';

dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const connectIdeas = async () => {
  const coll = collection(db, 'ideas');
  const snap = await getDocs(coll);

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

