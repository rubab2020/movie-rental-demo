import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Like = props => {
  const { liked, onClick } = props;
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";

  return (
    // return <FontAwesomeIcon icon={faCoffee} />;
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

export default Like;
