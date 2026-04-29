import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import MainNavbar from "./components/Navbar";
import Grid from "./components/BookGrid";
import WelcomeAlert from "./components/Alert";
import SearchForm from "./components/SearchForm";

// CSS
import "./App.css";

//MAIN FUNCTION
function App() {
  return (
    <div className="app bg-dark">
      <header>
        <MainNavbar />;
        <SearchForm />
      </header>
      <main>
        <WelcomeAlert />
        <Grid />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
