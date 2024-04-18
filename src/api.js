
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAp-xzaXdb-puoipQcves40jDur5rw7F_o",
  authDomain: "portfolio-e98c6.firebaseapp.com",
  projectId: "portfolio-e98c6",
  storageBucket: "portfolio-e98c6.appspot.com",
  messagingSenderId: "831725872131",
  appId: "1:831725872131:web:d089918a4357511fc99a36"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const projectsCollectionRef = collection(db,'projects')

export async function getProjects(){
    const snapshot = await getDocs(projectsCollectionRef);
    const projects = snapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
    }))
    console.log(projects)
    return projects;
}
