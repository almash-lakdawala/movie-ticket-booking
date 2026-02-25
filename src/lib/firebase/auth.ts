import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./db";

export const loginUser = async (email: string, password: string): Promise<any> => {

  const q = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password)
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    return null;
  }

  const doc = snap.docs[0];

  return {
    id: doc.id,
    ...doc.data()   
  };
};