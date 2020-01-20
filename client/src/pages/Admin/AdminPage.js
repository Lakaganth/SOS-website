import React from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "./../../context/firebase/firebaseContext";

import "./AdminPage.scss";
import firebase from "./../../context/firebase/FirebaseState";
import Signin from "./../../components/auth/Signin";

const AdminPage = props => {
  const { user } = React.useContext(FirebaseContext);

  const handleSignOut = () => {
    firebase.logout();
    props.history.push("/");
  };

  if (!user) {
    return <Signin></Signin>;
  } else {
    return (
      <div className="sport-card admin-page">
        <div className="cards admin-card">
          <h1>Events</h1>
          <Link to="/admin/add-event">Add Event</Link>
        </div>
        <div className="cards admin-card">
          <h1>Coach</h1>
          <Link to="/admin/add-coach">Add Coach</Link>
        </div>
        <div className="cards admin-card">
          <h1>Sport</h1>
          <Link to="/admin/add-sport">Add Sport</Link>
        </div>
        <div className="cards admin-card">
          <h1>Gallery</h1>
          <Link to="/admin/add-gallery">Add Gallery</Link>
        </div>
        <div className="cards admin-card">
          <h1>Testimonials</h1>
          <Link to="/admin/add-testimonial">Add Testimonial</Link>
          <Link to="/admin/testimonials">Testimonials</Link>
        </div>
        <div></div>
        <div></div>
        <div className="admin-signout">
          <button onClick={handleSignOut}>Sign OUT</button>
        </div>
      </div>
    );
  }
};

export default AdminPage;
