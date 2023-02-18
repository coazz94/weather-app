import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Profile } from "./components/Profile"

import { Home } from "./components/Home"

export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
