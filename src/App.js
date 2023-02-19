import "./App.css";
import Employee from "./components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Sam" role="chef" />
          <Employee name="Jeff" />
          <Employee name="Abby" />
        </>
      ) : (
        <p>You cannot see the employee list</p>
      )}
    </div>
  );
}

export default App;
