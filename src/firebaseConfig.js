import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7K29mnpwsYmDK7Qk3o57quEVYEdfP5fs",
    authDomain: "openinapp-28bb1.firebaseapp.com",
    projectId: "openinapp-28bb1",
    storageBucket: "openinapp-28bb1.appspot.com",
    messagingSenderId: "309936094654",
    appId: "1:309936094654:web:cc29f25af2bf36ed7a8def"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
