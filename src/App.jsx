import { useState } from "react";
import LandingPage from "./pages/landingPage";
import { UserContext } from "./components/ui/user";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ menuBtn, setMenuBtn }}>
        <LandingPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
