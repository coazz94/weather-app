import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { Profile } from "./components/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    </>
)
