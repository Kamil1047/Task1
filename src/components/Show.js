import React from "react";
import "./UserDetails.css";
const Show = (props) => {
  return (
    <div>
      {props.udata.map((val, index) => {
        return (
          <div className="user" key={index}>
            <div className="font-color">
              <div>
                <h3>{`User id: ${val.id}`}</h3>
              </div>
              <div>
                <h3>{`User Title: ${val.title}`}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
