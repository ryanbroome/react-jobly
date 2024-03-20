import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api/Api";
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom";
import userContext from "./userContext";

/** Profile Card
 *  renders Profile from database if validated token if not redirects to "/"
 *
 * **/
function ProfileStage() {
  const history = useHistory();
  const { validUser, token } = useContext(userContext);
  // todo when form submits, update
  const [userInfo, setUserInfo] = useState({ username: "testuser", password: "password", firstName: "", lastName: "", email: "" });
  // const [userInfo, setUserInfo] = useState({ ...validUser });

  useEffect(function () {
    async function loadUser() {
      const dToken = jwtDecode(token);
      const res = await JoblyApi.getUser(dToken.username);

      setUserInfo({ ...res });
      //   setUserInfo({ ...res.user });
    }
    loadUser();
  }, []);

  // need to

  if (!token) {
    history.push("/");
    return null;
  } else
    return (
      <div>
        <ProfileForm userInfo={userInfo} />
        <h3> Profile Form Above, Profile Card Below , Current Logged In User Info</h3>
        <ProfileCard user={validUser} />
      </div>
    );
}

export default ProfileStage;

//* when Profile form loads (useEffect w/ no dependancies) we want to take the username from validUser
// * use that validUser.username to make a get request for the rest of the user info
// * or take the username from the validUser and the data from the form,
// * when the form submits/ changes state we want to take that username from validUser, and the data from formData  and make a patch request to the API
// * this patch request will return the updated user info
// * use this updated user info to update the validUser state
// * will need to pass a method into context that can update the validUser
// * so once the patch is made and the user data comes back from it we will update the validUser
// * there is an issue with the application though using token as the key logic to unnlock protected routes
// * will this be an issue? will the token change by changing the data or will it remain the same?

// ! UNUSED CODE TO REFACTOR REMOVE REUSE
// useEffect(
//   function updateUser() {
//     async function updateProfile() {
//       const user = { ...userInfo };
//       try {
//         const res = await JoblyApi.updateUser(userInfo.username, user);

//         setUserInfo(res);
//       } catch (err) {
//         alert(`No users found with`);
//       }
//     }
//     updateProfile();
//   },
//   [userInfo]
// );
// async function updateUserInfo(username, data) {
//     const res = await JoblyApi.updateUser(username, data);
//     console.log("res", res);
//     return res;
//   }
