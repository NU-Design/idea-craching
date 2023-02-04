import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

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

export const db = getFirestore();
