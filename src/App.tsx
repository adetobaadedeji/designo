import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Layout } from 'components';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
          <Route path="*" element={<h3>Page Not Found!</h3>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
