import React from "react"
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Create from "./components/create"
import RecordList from "./components/recordList";
import Edit from "./components/edit"

export default function App(){
    return (
        <div>
            <Navbar />
            <div style={{margin : 20}}>
                <Routes>
                    <Route exact path="/" element={<RecordList />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
        </div>
    )
}