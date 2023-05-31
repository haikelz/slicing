import { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NotFoundPage from "./pages/404";
import Comments from "./pages/Comments";
import Digidaw from "./pages/Digidaw";
import Enlighten from "./pages/Enlighten";
import Faceless from "./pages/Faceless";
import Holadok from "./pages/Holadok";
import Home from "./pages/Home";
import Jobless from "./pages/Jobless";
import Kourse from "./pages/Kourse";
import Movies from "./pages/Movies";
import MusixPlayer from "./pages/MusixPlayer";
import NowtedHero from "./pages/NowtedHero";
import Priced from "./pages/Priced";
import Swiftship from "./pages/Swiftship";
import Testimonial from "./pages/Testimonial";
import TwitterEmbed from "./pages/TwitterEmbed";
import GrolinLogin from "./pages/grolin/Login";
import GrolinRegister from "./pages/grolin/Register";

function Loading() {
  return (
    <div className="flex w-full items-center justify-center bg-black">
      <main className="flex w-full max-w-7xl items-center justify-center">
        <p className="font-rubik text-xl font-semibold">Loading....</p>
      </main>
    </div>
  );
}

function LoadingWrapper(Component: FC) {
  function loadingWrapper(props: {}) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, [setIsLoading]);

    return isLoading ? <Loading /> : <Component {...props} />;
  }

  return loadingWrapper;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/musix-player" element={<MusixPlayer />} />
        <Route path="/swiftship" element={<Swiftship />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/twitter-embed" element={<TwitterEmbed />} />
        <Route path="/enlighten" element={<Enlighten />} />
        <Route path="/nowted-hero" element={<NowtedHero />} />
        <Route path="/kourse" element={<Kourse />} />
        <Route path="/jobless" element={<Jobless />} />
        <Route path="/priced" element={<Priced />} />
        <Route path="/digidaw" element={<Digidaw />} />
        <Route path="/grolin/register" element={<GrolinRegister />} />
        <Route path="/grolin/login" element={<GrolinLogin />} />
        <Route path="/faceless" element={<Faceless />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/holadok" element={<Holadok />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const AppWithLoading = LoadingWrapper(App);
export default AppWithLoading;
