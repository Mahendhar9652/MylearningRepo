import React, { useState, useEffect } from 'react';

const GoogleSignIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: "YOUR_CLIENT_ID",
          scope: "profile email"
        })
        .then(() => {
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          if (GoogleAuth.isSignedIn.get()) {
            setIsSignedIn(true);
            const profile = GoogleAuth.currentUser.get().getBasicProfile();
            setUserData({
              name: profile.getName(),
              email: profile.getEmail(),
              imageUrl: profile.getImageUrl()
            });
          }
        });
    });
  }, []);

  const handleSignIn = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        setIsSignedIn(true);
        const profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        setUserData({
          name: profile.getName(),
          email: profile.getEmail(),
          imageUrl: profile.getImageUrl()
        });
      });
  };

  const handleSignOut = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signOut()
      .then(() => {
        setIsSignedIn(false);
        setUserData({});
      });
  };

  return (
    <div>
      {isSignedIn ? (
        <>
          <img src={userData.imageUrl} alt={userData.name} />
          <p>Welcome, {userData.name}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default GoogleSignIn;
