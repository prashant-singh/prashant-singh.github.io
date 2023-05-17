// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDoA-Uytu1kD5N2jfgjU9uwDPUxLfD5zWU",
	authDomain: "react-portfolio-fbba3.firebaseapp.com",
	projectId: "react-portfolio-fbba3",
	storageBucket: "react-portfolio-fbba3.appspot.com",
	messagingSenderId: "954453124367",
	appId: "1:954453124367:web:56fc4f1b0fb10d209e4a7a",
	measurementId: "G-X5VMXZX4VV"
};

const FirebaseInitialize = () => {
	const app = initializeApp(firebaseConfig);
	getAnalytics(app);
	// Initialize Firebase
}
export default FirebaseInitialize;
