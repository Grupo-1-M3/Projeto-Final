import { GlobalStyle } from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <GlobalStyle />
        <Routes />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          theme="dark"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AnimatePresence>
    </div>
  );
}

export default App;
