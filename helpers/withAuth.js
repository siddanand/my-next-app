import React from "react";
import { Component } from "react";
import router from "next/router";
import "firebase/auth";
import firebase from "firebase/app";

import initFirebase from "../services/firebase.js";
initFirebase();

const withAuth = (Component) => {
  class withAuth extends React.Component {
    state = {
      status: "Loading",
    };
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged((authUser) => {
        console.log(authUser);
        if (authUser) {
          this.setState({
            status: "SIGNED_IN",
          });
        } else {
          router.push("/");
        }
      });
    };
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  }
  return withAuth;
};

export default withAuth;
