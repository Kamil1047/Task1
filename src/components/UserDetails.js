import "./UserDetails.css";

const UserDetails = (props) => {
  const onClickHandler = () => {
    alert(`UserId: ${props.id} \n Title: ${props.title}`);
  };
  return (
    <div onClick={onClickHandler}>
      <div>
        <div>{props.userId}</div>
        <div>{props.title}</div>
        <div>{props.completed.toString()}</div>
      </div>
    </div>
  );
};

export default UserDetails;
