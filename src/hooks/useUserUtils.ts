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
import { doc, setDoc, updateDoc,  getFirestore, collection, query, getDocs } from "firebase/firestore";
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

  const saveVehicle = useCallback(
    async (vehicleDetails: IVehicle) => {
      // Get the currently logged-in user
      const currentUser = firebaseAuth.currentUser;
  
      if (currentUser) {
        const userId = currentUser.uid;
        const docRef = doc(
          firebaseFirestore,
          FirebaseCollections.USERS,
          userId,
          FirebaseCollections.VEHICLES,
          vehicleDetails.registrationNumber
        );
  
        await setDoc(docRef, vehicleDetails);
      } else {
        throw new Error("No user is currently logged in.");
      }
    },
    []
  );

  const getUserVehicles = async (userId: any) => {
    try {
      const vehiclesRef = collection(
        firebaseFirestore,
        FirebaseCollections.USERS,
        userId,
        FirebaseCollections.VEHICLES
      );
  
      const querySnapshot = await getDocs(vehiclesRef);
  
      const vehicles: any[] = [];
      querySnapshot.forEach((doc) => {
        const vehicle = doc.data();
        vehicles.push(vehicle);
      });
  
      return vehicles;
    } catch (error) {
      console.error("Error retrieving user vehicles:", error);
      throw error;
    }
  };
  

  return {
    createUser,
    signIn,
    logout,
    saveVehicle,
    getUserVehicles,
  };
};

export default useUserUtils;
