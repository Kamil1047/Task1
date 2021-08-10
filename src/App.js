import UserDetails from "./components/UserDetails";

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

  return (
    <div className="App">
      <UserDetails
        userId={userData[0].userId}
        id={userData[0].id}
        title={userData[0].title}
        completed={userData[0].completed}
      />
      <UserDetails
        userId={userData[1].userId}
        id={userData[1].id}
        title={userData[1].title}
        completed={userData[1].completed}
      />
      <UserDetails
        userId={userData[2].userId}
        id={userData[2].id}
        title={userData[2].title}
        completed={userData[2].completed}
      />
      <UserDetails
        userId={userData[3].userId}
        id={userData[3].id}
        title={userData[3].title}
        completed={userData[3].completed}
      />
      <UserDetails
        userId={userData[4].userId}
        id={userData[4].id}
        title={userData[4].title}
        completed={userData[4].completed}
      />
      <UserDetails
        userId={userData[5].userId}
        id={userData[5].id}
        title={userData[5].title}
        completed={userData[5].completed}
      />
      <UserDetails
        userId={userData[6].userId}
        id={userData[6].id}
        title={userData[6].title}
        completed={userData[6].completed}
      />
    </div>
  );
};

export default App;
