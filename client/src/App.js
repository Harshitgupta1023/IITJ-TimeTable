import ReadData from "./ReadData";
import { SignIn } from "./GoogleAuth";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const App = () => {
  const auth = getAuth();
  return (
    <div>
      <button onClick={SignIn}>Default</button>;      
    </div>
  );
};

export default App;
