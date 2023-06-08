import { doc, getDoc } from "firebase/firestore";
import useFirebaseUser from "./useFirebaseUser";
import { firebaseFirestore } from "@/lib/firebase";
import { FirebaseCollections } from "@/types/Collections";
import { IUser } from "@/types/User";
import { useAuthStore } from "./useAuthStore";
import { useEffect } from "react";

const useAuthStateListener = () => {
  const firebaseUser = useFirebaseUser();
  const { setUser } = useAuthStore();

  const fetchData = async () => {
    const userRef = doc(
      firebaseFirestore,
      FirebaseCollections.USERS,
      firebaseUser?.uid as string
    );

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setUser({ id: userSnap.id, ...userSnap.data() } as IUser);
    }
  };

  useEffect(() => {
    if (firebaseUser === undefined) {
      return;
    }

    if (firebaseUser === null) {
      setUser(null);
      return;
    }

    fetchData();
  }, [firebaseUser]);
};

export default useAuthStateListener;
