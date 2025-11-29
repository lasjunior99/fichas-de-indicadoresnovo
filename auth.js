import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// SUA CONFIGURAÇÃO
const firebaseConfig = {
  apiKey: "AIzaSyBnsjpMLXbm_q5mw7tfIJI__--ST4_BXcw",
  authDomain: "indicadores-distribuido.firebaseapp.com",
  projectId: "indicadores-distribuido",
  storageBucket: "indicadores-distribuido.firebasestorage.app",
  messagingSenderId: "631624072056",
  appId: "1:631624072056:web:47429766202f93a079a68d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elemento de mensagem
const msg = document.getElementById("msg");

// ---------------------
// FUNÇÃO: CRIAR CONTA
// ---------------------
window.criarConta = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      msg.textContent = "Conta criada com sucesso! Entrando...";
      setTimeout(() => { window.location.href = "index.html"; }, 1000);
    })
    .catch((error) => {
      msg.textContent = "Erro: " + error.message;
    });
};

// ---------------------
// FUNÇÃO: LOGIN
// ---------------------
window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      msg.textContent = "Entrando...";
      setTimeout(() => { window.location.href = "index.html"; }, 800);
    })
    .catch((error) => {
      msg.textContent = "Erro: " + error.message;
    });
};

// ---------------------
// BLOQUEIO DE PÁGINAS
// ---------------------
onAuthStateChanged(auth, (user) => {
  // Se estiver no index.html e não estiver logado → mandar para login
  if (!user && window.location.pathname.includes("index.html")) {
    window.location.href = "login.html";
  }
});

// ---------------------
// LOGOUT
// ---------------------
window.logout = function () {
  signOut(auth);
  window.location.href = "login.html";
};
