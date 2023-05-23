import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import { Provider } from 'react-redux';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
