import { deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
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

//the following function add theater data in theater collection

export const addTheater = async (theater: any): Promise<boolean> => {
  try {
    await addDoc(collection(db,"theaters"),theater )
    return true;
  }
  catch (error){
    return false;
  }
}





// the following function will display all movies on admin panle Reads all documents
// Returns array of movies
export const displayMovie = async () => {
    try{
      const snap = await getDocs(collection(db, "movies"));

      return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
   catch (error) {
		console.log(error);
		return [];
	}
}


//the following function will delete the movie data in collection

export const deleteMovie = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "movies",id));
    return true;

  }
  catch(error){
    alert(error);
    return false;
  }
}


//the following function will update the data in collection 
export const updateMovie = async (id: string, data: any) => {
  try {
    await updateDoc(doc(db, "movies",id),data);
    return true;

  }catch (error) {
		alert(error);
		return false;
	}
}


//the following function will fetch the particular movie data by it's id

export const getMovieById = async ( id: string  ) => {
  const ref = doc(db, "movies",  id);
  const snap = await getDoc(ref);

  if(!snap.exists()) return null;

  return {
		id: snap.id,
		...snap.data()
	};

}


