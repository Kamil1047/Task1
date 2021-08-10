import React, { useState } from "react";
import UserDetails from "./components/UserDetails";
import Show from "./components/Show";
const App = () => {
  const userData = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
  ];
  const [usdata, setusdata] = useState("");
  const getdata = (e) => {
    setusdata(e);
  };

  const udata = [
    {
      title: usdata.title,
      id: usdata.id,
      completed: usdata.completed,
    },
  ];

  return (
    <div className="App">
      <Show udata={udata} />
      <UserDetails userData={userData} onGetData={getdata} />
    </div>
  );
};

export default App;
