import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Provider } from 'react-redux';


export default function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
