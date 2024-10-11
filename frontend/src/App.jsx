import { useEffect } from "react";
import TextEditor from "./component/TextEditor";
import { Route, Routes, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const RedirectToDocument = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueId = uuidv4();
    navigate(`/documents/${uniqueId}`, { replace: true });
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RedirectToDocument />} />
      <Route path="/documents/:id" element={<TextEditor />} />
    </Routes>
  );
};

export default App;
