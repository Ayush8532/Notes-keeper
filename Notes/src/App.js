import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/Landing Page/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreens/ProfileScreen";



const App= () => {
  const [search, setSearch] = useState("");
  console.log(search);
  
  return (
    <BrowserRouter>
      <Header setSearch={ setSearch} />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route  path="/profile" element={<ProfileScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/mynotes/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
