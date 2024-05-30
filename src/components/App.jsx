import { GlobalProvider } from "../Context/GlobalContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

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
