import {
  firebaseAuth,
  firebaseFirestore,
  firebaseStorage,
} from "@/lib/firebase";
import { FirebaseCollections } from "@/types/Collections";
import { IUser } from "@/types/User";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useCallback } from "react";

const useUserUtils = () => {
  const createUser = async (userDetails: IUser, password: string) => {
    await createUserWithEmailAndPassword(
      firebaseAuth,
      userDetails.email,
      password
    )
      .then(async (userCred) => {
        const docRef = doc(
          firebaseFirestore,
          FirebaseCollections.USERS,
          userCred.user?.uid
        );

        await setDoc(docRef, userDetails);

        const logoRef = ref(
          firebaseStorage,
          `${FirebaseCollections.USERS}/${docRef.id}/image`
        );

        await uploadString(
          logoRef,
          userDetails?.logo as string,
          "data_url"
        ).then(async (snapshot) => {
          const logoDownloadUrl = await getDownloadURL(logoRef);

          await updateDoc(docRef, {
            logo: logoDownloadUrl,
          });
        });

        return userCred.user;
      })
      .catch((e) => {
        throw e as FirebaseError;
      });
  };

  const signIn = useCallback(async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCred) => {
        return userCred.user;
      })
      .catch((e) => {
        throw e as FirebaseError;
      });
  }, []);

  const logout = useCallback(async () => {
    await signOut(firebaseAuth);
  }, []);

  return {
    createUser,
    signIn,
    logout,
  };
};

export default useUserUtils;
