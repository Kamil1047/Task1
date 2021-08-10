import "./UserDetails.css";

const UserDetails = (props) => {
  const onUserdataHandler = () => {
    return console.log(props.userdata.title);
  };

  const Data = props.userdata.map((userval, index) => {
    return (
      <div key={index} className="user">
        <div className="font-color">
          <div>{userval.id}</div>
          <div>{userval.title}</div>
          <div>{userval.completed.toString()}</div>
        </div>
      </div>
    );
  });

  return <div onClick={onUserdataHandler}>{Data}</div>;
};

export default UserDetails;
