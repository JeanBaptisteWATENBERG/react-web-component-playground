import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";

const Greeting = ({ name, onClick }) => <p onClick={onClick}>Hello {name}</p>;

Greeting.propTypes = {
  name: PropTypes.string,
};

const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM);

customElements.define("web-greeting", WebGreeting);
