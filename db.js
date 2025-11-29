import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnsjpMLXbm_q5mw7tfIJI__--ST4_BXcw",
  authDomain: "indicadores-distribuido.firebaseapp.com",
  projectId: "indicadores-distribuido",
  storageBucket: "indicadores-distribuido.firebasestorage.app",
  messagingSenderId: "631624072056",
  appId: "1:631624072056:web:47429766202f93a079a68d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// salvar um registro
export async function salvarColecao(nomeColecao, id, dados) {
  await setDoc(doc(db, nomeColecao, id), dados);
}

// ler coleção completa
export async function lerColecao(nomeColecao) {
  const snapshot = await getDocs(collection(db, nomeColecao));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}
