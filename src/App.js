import { Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";

function App () {
    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App