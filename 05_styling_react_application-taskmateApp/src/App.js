import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}
export default App;
