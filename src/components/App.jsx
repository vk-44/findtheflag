import { GlobalProvider } from "../Context/GlobalContext";
import { ThemeProvider } from "../Context/ThemeContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="center">
        <Header />
        <ThemeProvider>
          <GlobalProvider>
            <Main />
          </GlobalProvider>
        </ThemeProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
