import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {
  // let isLoggedInn = false;
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<HomePage/>}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App
