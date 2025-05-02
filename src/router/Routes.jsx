import { BrowserRouter,Route, Routes } from "react-router-dom";
import TaskList from "../viwes/TaskList";
import App from "../App";

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/task/:projectid" element={<TaskList />} />
            </Routes>
        </BrowserRouter>    
    );
}