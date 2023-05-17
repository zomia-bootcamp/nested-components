import React from "react";

function Picture() {
  return (
    <img
      alt="octopus"
      src="https://visitseaquest.com/wp-content/uploads/2020/07/unnamed-30.jpg"
    />
  );
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
      <h2>Class: Cephalopoda</h2>
    </>
  );
}

export default Profile;
