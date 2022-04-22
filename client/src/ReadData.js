import React from "react";
import { db } from "./config";
import { doc, getDoc } from "firebase/firestore";

const ReadData = () => {
  const getEmails = async () => {
    const docRef = doc(db, "Emails", "gupta.44");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  };

  getEmails();
  return (
    <div>
      <h1>Loading....</h1>
    </div>
  );
};

export default ReadData;
