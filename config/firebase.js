import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTG3lJ2289qQbegy7gHv2iUb1pUvvTKcg",
  authDomain: "chat-546b8.firebaseapp.com",
  databaseURL: "https://chat-546b8-default-rtdb.firebaseio.com",
  projectId: "chat-546b8",
  storageBucket: "chat-546b8.appspot.com",
  messagingSenderId: "673792936986",
  appId: "1:673792936986:web:7e02da2c84ee54efb855a3",
  measurementId: "G-Y37BBG6GC1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, analytics, auth };
export const database = getFirestore();
