import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  projectId: 'gen-lang-client-0128713331',
  appId: '1:1091656935060:web:a7c1fba39af94a20fc3681',
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: 'gen-lang-client-0128713331.firebaseapp.com',
  storageBucket: 'gen-lang-client-0128713331.firebasestorage.app',
  messagingSenderId: '1091656935060',
  oAuthClientId: '1091656935060-jpdordi3mqqf98cpag2hg79u3uhotmam.apps.googleusercontent.com',
}

export const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
