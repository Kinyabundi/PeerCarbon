import { firebaseAuth } from "@/lib/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export let firebaseUserRef: undefined | null | User;

const useFirebaseUser = () => {
  const [firebaseUser, setFirebaseUser] = useState<undefined | null | User>(
    undefined
  );

  useEffect(
    () =>
      onAuthStateChanged(firebaseAuth, (u) => {
        firebaseUserRef = u;
        setFirebaseUser(u);
      }),
    []
  );

  return firebaseUser;
};

export default useFirebaseUser;
