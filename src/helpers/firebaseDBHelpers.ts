import { firebaseFirestore } from "@/lib/firebase";
import { FirebaseCollections } from "@/types/Collections";
import { IUser } from "@/types/User";
import { IVehicle } from "@/types/Vehicle";
import {
  CollectionReference,
  DocumentData,
  collection,
} from "firebase/firestore";

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(
    firebaseFirestore,
    collectionName
  ) as CollectionReference<T>;
};

export const usersCollection = createCollection<IUser>(FirebaseCollections.USERS);
export const vehicleCollection = createCollection<IVehicle>(FirebaseCollections.VEHICLES);
