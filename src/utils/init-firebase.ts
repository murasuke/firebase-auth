import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence } from 'firebase/auth';

// FirebaseApp初期化
initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
});

console.log(process.env.REACT_APP_AUTH_PERSISIT);
const persisit = process.env.REACT_APP_AUTH_PERSISIT ?? '0';

if (persisit === '0') {
  // ログインを継続しない
  getAuth().setPersistence(browserSessionPersistence);
}
