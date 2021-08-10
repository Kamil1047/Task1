import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const [data, setData] = useState("");
  const onUserDataHandler = (userInformation) => {
    //console.log(userInformation);
    setData(userInformation);
  };
  //   if (data) {
  //     return (
  //       <div>
  //         <h1>{data.title}</h1>
  //       </div>
  //     );
  //   }
  props.onGetData(data);
  return props.userData.map((userVal, index) => {
    return (
      <div onClick={() => onUserDataHandler(userVal)} key={index}>
        <div className="user">
          <div className="font-color">
            <div>{userVal.id}</div>
            <div>{userVal.title}</div>
            <div>{userVal.completed.toString()}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default UserDetails;
