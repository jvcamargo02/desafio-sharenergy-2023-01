import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ResetCss from "./globalStyle/resetCss";
import Dashboard from "./pages/Dashboard";
import HttpCatsApi from "./pages/Dashboard/HTTPCatsApi/Index";

import RandomUser from "./pages/Dashboard/RandomUserApi";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <>
            <ResetCss />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRouteGuard>
                                <Dashboard />
                            </ProtectedRouteGuard>
                        }
                    >
                        <Route path="random-user" element={<RandomUser />} />
                        <Route path="http-cats" element={<HttpCatsApi />} />
                        <Route index path="*" element={<Navigate to="/dashboard/random-user" />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

function ProtectedRouteGuard({ children }: { children: React.ReactNode }) {
    /*  const token = useToken(); */

    /*     if (!token) {
        return <Navigate to="/sign-in" />;
    } */

    return <>{children}</>;
}

export default App;
