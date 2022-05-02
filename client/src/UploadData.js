import React from "react";
import EmailData from "./Emails.json";
import CourseData from "./Courses.json";
import { db } from "./config";
import { doc, setDoc } from "firebase/firestore";

const UploadData = () => {
  // Function for emails update
  const EmailUpload = () => {
    Object.keys(EmailData).map(async (da) => {
      await setDoc(doc(db, "Emails", da),  EmailData[da] );
    });
  };
  // Function for Courses update
  const CourseUpload = () => {
    Object.keys(CourseData).map(async (da) => {
      await setDoc(doc(db, "Courses", da), { details: CourseData[da] });
    });
  };
  EmailUpload()
  // CourseUpload()
  return (
    <div>
      <h1> Uploading Data .... </h1>
    </div>
  );
};

export default UploadData;
