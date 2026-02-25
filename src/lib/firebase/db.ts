import { getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "./config";
import { collection, addDoc } from 'firebase/firestore';

export const db = getFirestore(app);




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