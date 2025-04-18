import React, { useState } from "react";
import "./LoginSignup.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { FaSearch } from "react-icons/fa";
// import Button from "react-bootstrap/Button";

export interface IloginPageProps {}

const LoginSignup: React.FunctionComponent<IloginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input placeholder="Enter name" type="text" />
          </div>
        )}
        <div className="input">
          <input placeholder="Enter email" type="email" />
        </div>
        <div className="input">
          <input placeholder="Enter password" type="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          {" "}
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
//};

// const LoginSignup = () => {
//   const [action, setAction] = useState("Login");
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="input">
//             <input placeholder="Enter name" type="text" />
//           </div>
//         )}
//         <div className="input">
//           <input placeholder="Enter email" type="email" />
//         </div>
//         <div className="input">
//           <input placeholder="Enter password" type="password" />
//         </div>
//       </div>
//       {action === "Sign Up" ? (
//         <div></div>
//       ) : (
//         <div className="forgot-password">
//           {" "}
//           Lost Password? <span>Click Here!</span>
//         </div>
//       )}
//       <div className="submit-container">
//         <div
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Sign Up");
//           }}
//         >
//           Sign Up
//         </div>
//         <div
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Login");
//           }}
//         >
//           Login
//         </div>
//       </div>
//     </div>
//   );
// };
export default LoginSignup;
