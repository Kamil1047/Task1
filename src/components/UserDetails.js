import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const [data, setData] = useState("");
  const onUserDataHandler = (userInformation) => {
    //console.log(userInformation);
    setData(userInformation);
  };

  props.onGetData(data);
  return props.userData.map((userVal, index) => {
    return (
      <div onClick={() => onUserDataHandler(userVal)} key={index}>
        <div className="user">
          <div className="font-color">
            <div>{`User id: ${userVal.id}`}</div>
            <div>{`Title: ${userVal.title}`}</div>
            <div>{`Completed: ${userVal.completed.toString()}`}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default UserDetails;
