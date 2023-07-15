import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  // let bla = useLocation()

  return (
    <div>
      THIS IS THE PROFILE PAGE FOR {username}!
      <br />
      <hr />
      {/* <p>{bla}</p> */}
      <hr />

      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;
