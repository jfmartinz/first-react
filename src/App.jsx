import './App.css';

function AlertBox({ children, type }) {
  const bgColor = {
    success: 'green',
    error: 'red',
    warning: 'yellow',
  };

  return (
    <div className='layout'>
      <h1>{type}</h1>
      <div style={{ backgroundColor: bgColor[type] }}>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <AlertBox type='success'>
        <p>This is a success message.</p>
      </AlertBox>
      <AlertBox type='error'>
        <p>This is an error message.</p>
      </AlertBox>
      <AlertBox type='warning'>
        <p>This is warning message.</p>
      </AlertBox>
    </>
  );
}
