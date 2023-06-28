// Importar as funções necessárias da biblioteca Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Configuração do Firebase
const connectFirebase = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyD2_5obrslATvMUUN4m1gv2pQ8YUIY6VjY",
		authDomain: "testeprofessor-be6bc.firebaseapp.com",
		databaseURL: "https://testeprofessor-be6bc-default-rtdb.firebaseio.com",
		projectId: "testeprofessor-be6bc",
		storageBucket: "testeprofessor-be6bc.appspot.com",
		messagingSenderId: "37954144669",
		appId: "1:37954144669:web:8771e379a033b022a68774",
		measurementId: "G-5EWVMDCEKN"
	};

	// Inicializar o Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const db = getDatabase();
	firebase.initializeApp(firebaseConfig);
}

export default connectFirebase