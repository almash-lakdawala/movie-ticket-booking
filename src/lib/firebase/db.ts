import { getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "./config";
import { collection, addDoc } from 'firebase/firestore';

export const db = getFirestore(app);



//the following function add created users data in users collection (firebase)
export const createUser = async (user: any) => {
  try {
   
    const q = query(
      collection(db, "users"),
      where("email", "==", user.email)
    );

    const snap = await getDocs(q);

    if (!snap.empty) {
      alert("Email already exists");
      return false;
    }

   
    await addDoc(collection(db, "users"), user);
    alert("Signup successful");
    return true;

  } catch (err) {
    console.log(err);
    alert("Error creating user");
    return false;
  }
};

//the following function will add movie data in movies collectiion (firebase)

export const addMovie = async (movie: any): Promise<boolean> => {
    try{ 
      await addDoc(collection(db, "movies"), movie);
      return true;
    }
    catch (error){
      return false;
    }
}

