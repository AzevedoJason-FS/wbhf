import { Routes, Route } from "react-router-dom";
import { React, Suspense, lazy } from "react";
import ErrorPage from "./error-page";
import { Loader } from "./components/Loader.jsx";

const HomePage = lazy(() => import("./routes/Home.jsx"));
const LoginPage = lazy(() => import("./routes/Login.jsx"));
const ArticlePage = lazy(() => import("./routes/Article.jsx"));
const DashboardPage = lazy(() => import("./routes/Dashboard.jsx"));
const DashboardCreate = lazy(() => import("./routes/DashboardCreate.jsx"));
const DashboardDelete = lazy(() => import("./routes/DashboardDelete.jsx"));

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                   <Loader />
                  </div>
                </div>
              }>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/create-article"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <DashboardCreate />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="/article/:slug"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <ArticlePage />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/delete-article"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <DashboardDelete />
            </Suspense>
          }
        />
        {/* 
        <Route
          path="/exhibits/:exhibitSlug"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <SingleExhibitPage />
            </Suspense>
          }
        />
        <Route
          path="/exhibits"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <p>Loading</p>
                  </div>
                </div>
              }>
              <ExhibitsPage />
            </Suspense>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
