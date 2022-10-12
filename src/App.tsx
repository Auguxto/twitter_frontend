import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Account/Register";
import Login from "./screens/Account/Login";
import NotFound from "./screens/NotFound";
import UserProvider from "./context/User";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
