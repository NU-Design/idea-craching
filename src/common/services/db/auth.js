import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  // collection,
  serverTimestamp,
  // addDoc,
  setDoc,
  doc,
} from 'firebase/firestore';

import { db } from '../../utils/firebase/firebase.util';

import { emptyMessage } from './value/string';

export const auth = getAuth();

export const createUserDocumentFromAuth = async (userAuth, data) => {
  if (!userAuth) return;

  // const ref = doc(collection(db,

  data['timestamp'] = serverTimestamp();
  data['user_id'] = userAuth.uid;
  data['email'] = userAuth.email;
  data['bio'] = emptyMessage;
  data['liked_ideas'] = [];
  data['owned_ideas'] = [];

  console.log('DATA', data);
  try {
    // const docRef = await addDoc(collection(db, 'users'), data);
    const docRef = await setDoc(doc(db, 'users', userAuth.uid), data);

    return docRef;
  } catch (error) {
    console.log('error creating the user', error.message);
  }
};

export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  data,
) => {
  if (!email || !password) return;

  try {
    const authObject = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ).then((result, reject) => {
      return result;
    });
    const userInfo = {
      uid: authObject.user.uid,
      email: authObject.user.email,
    };
    createUserDocumentFromAuth(userInfo, data);
    return userInfo;
  } catch (error) {
    console.log('error createAuthUserWithEmailAndPassword', error.message);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    console.log('success signIn');
    return result;
  } catch (error) {
    console.log('error signInAuthUserWithEmailAndPassword', error.message);
  }
};

export const signOutUser = async () => await signOut(auth);
