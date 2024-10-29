import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { Fragment } from "react";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          const Page = route.page;
          const Layout = route?.isShowHeader ? DefaultComponent : Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Page />
                  {route.isShowFooter && <FooterComponent />}{" "}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
