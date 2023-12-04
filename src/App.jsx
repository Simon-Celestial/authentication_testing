import { MainRouter } from "./router";
import { BasketProvider } from "./context/BasketContext";
import {UserProvider} from "./context/AuthContext.jsx";

function App() {
  return (
      <UserProvider>
          <BasketProvider>
              <MainRouter />
          </BasketProvider>
      </UserProvider>
  );
}

export default App;
