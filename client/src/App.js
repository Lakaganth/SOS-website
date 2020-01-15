import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Waypoint } from "react-waypoint";

import "./App.css";

import Add_coaches from "./components/coaches/Add_coaches";

// Pages import
import LandingPage from "./pages/landing_page/LandingPage";
import EventsPage from "./pages/Events/EventsPage";
import SOSTrustPage from "./pages/SOSTrust/SOSTrustPage";
import AboutPage from "./pages/About/AboutPage";
import ContactsPage from "./pages/Contact/ContactsPage";

//Components Import
import Header from "./components/header/Header";
import Sports from "./components/sports/Sports";

import AddSport from "./components/sports/AddSport";
import Coaches from "./components/coaches/Coaches";
import AllCoaches from "./components/coaches/AllCoaches";
import Events from "./components/events/Events";
import EventsForm from "./components/events/EventsForm";
import AdminPage from "./pages/Admin/AdminPage";
import EventsDetail from "./components/events/EventsDetail";
import MainGallery from "./components/gallery/MainGallery";

import FirebaseContext from "./context/firebase/firebaseContext";
import firebase from "./context/firebase/FirebaseState";
import UseAuth from "./components/auth/UseAuth";
import Signin from "./components/auth/Signin";
import GalleryImages from "./components/gallery/GalleryImages";
import AddGallery from "./components/gallery/AddGallery";
import AddGalleryLinks from "./components/gallery/AddGalleryLinks";
import HeaderNav from "./components/header/HeaderNav";

// Server Connection
const client = new ApolloClient({
  // uri: "https://schoolofsports.herokuapp.com/graphql"
  uri: "http://localhost:5000/graphql"
});

const App = () => {
  const user = UseAuth();
  const [showLogo, setShowLogo] = useState(false);
  return (
    <ApolloProvider client={client}>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Router>
          <Waypoint
            bottomOffset="50%"
            onEnter={() => setShowLogo(true)}
            onLeave={() => setShowLogo(false)}
          />
          <HeaderNav showLogo={showLogo}></HeaderNav>

          <Switch>
            <React.Fragment>
              <div className="wrappers">
                {/* pages */}
                <Route path="/" exact component={LandingPage} />

                <Route path="/events" exact component={EventsPage} />
                <Route path="/sos-trust" exact component={SOSTrustPage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/contact" exact component={ContactsPage} />

                {/* Components */}
                <Route path="/sports" exact component={Sports} />

                <Route path="/sports/coaches/:_id" component={Coaches} />
                <Route path="/sports/coaches/" exact component={AllCoaches} />
                <Route path="/sports/events" exact component={Events} />
                <Route path="/sports/events/:id" component={EventsDetail} />
                <Route path="/gallery" exact component={MainGallery} />
                <Route path="/gallery-images/:id" component={GalleryImages} />

                {/* Admin Page */}

                <Route exact path="/sign-in" component={Signin} />
                <Route path="/admin" exact component={AdminPage} />
                <Route path="/admin/add-event" exact component={EventsForm} />
                <Route path="/admin/add-coach" exact component={Add_coaches} />
                <Route path="/admin/add-sport" exact component={AddSport} />
                <Route path="/admin/add-gallery" exact component={AddGallery} />
                <Route
                  path="/admin/add-gallery-link/:id"
                  exact
                  component={AddGalleryLinks}
                />
              </div>
            </React.Fragment>
          </Switch>
        </Router>
      </FirebaseContext.Provider>
    </ApolloProvider>
  );
};

export default App;
