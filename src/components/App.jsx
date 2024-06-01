import { GlobalProvider } from "../Context/GlobalContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="center">
        <Header />
        <GlobalProvider>
          <Main />
        </GlobalProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
