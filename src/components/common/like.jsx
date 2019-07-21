import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class Like extends Component {
  render() {
    const { liked, onClick } = this.props;
    // return <FontAwesomeIcon icon={faCoffee} />;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      />
    );
  }
}

export default Like;
