import UserCard from './UserCard.jsx';

export default function App() {
  return (
    <>
      <UserCard
        name='John Doe'
        age={30}
        isOnline={true}
      />
      <UserCard
        name='Jane Smith'
        age={25}
        isOnline={true}
      />
    </>
  );
}
