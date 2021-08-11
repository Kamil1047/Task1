import React from "react";
import "./UserDetails.css";
const Show = (props) => {
  console.log(props, "props");
  const { id, title } = props.udata;
  return (
    <div>
      <div className="user">
        <div className="font-color">
          <div>
            <h3>{`User id: ${id || ""}`}</h3>
          </div>
          <div>
            <h3>{`User Title: ${title || ""}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
