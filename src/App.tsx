import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./Components/UserDash/Library";
import LibrarySubject from "./Components/UserDash/LibrarySubject";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/library' element={<Library />}></Route>
        <Route path='/librarySubject' element={<LibrarySubject />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
