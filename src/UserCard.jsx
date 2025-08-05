function Card({ name, age, isOnline }) {
  return (
    <div>
      <p>
        Hello my name is {name}. I am {age} years old
      </p>
      <p>Status: {isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}

export default Card;
