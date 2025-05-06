import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signup">Go to Signup</Link>
      <br />
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default App;
