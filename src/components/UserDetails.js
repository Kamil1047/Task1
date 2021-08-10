import "./UserDetails.css";

const UserDetails = (props) => {
  const onUserDataHandler = (userInformation) => {
    console.log(userInformation);
  };

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
