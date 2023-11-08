import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
