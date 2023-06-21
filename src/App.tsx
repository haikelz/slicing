import { FC, useEffect, useState } from "react";
import { Route, Switch } from "wouter";
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
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <main className="flex w-full max-w-7xl items-center justify-center">
        <p className="font-rubik text-xl font-semibold">Loading....</p>
      </main>
    </div>
  );
}

function LoadingWrapper(Component: FC) {
  function loadingWrapper(props: Record<string, never>) {
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
    <>
      <Route path="/musix-player">
        <MusixPlayer />
      </Route>
      <Route path="/swiftship">
        <Swiftship />
      </Route>
      <Route path="/testimonial">
        <Testimonial />
      </Route>
      <Route path="/twitter-embed">
        <TwitterEmbed />
      </Route>
      <Route path="/enlighten">
        <Enlighten />
      </Route>
      <Route path="/nowted-hero">
        <NowtedHero />
      </Route>
      <Route path="/kourse">
        <Kourse />
      </Route>
      <Route path="/jobless">
        <Jobless />
      </Route>
      <Route path="/priced">
        <Priced />
      </Route>
      <Route path="/digidaw">
        <Digidaw />
      </Route>
      <Route path="/grolin/register">
        <GrolinRegister />
      </Route>
      <Route path="/grolin/login">
        <GrolinLogin />
      </Route>
      <Route path="/faceless">
        <Faceless />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/holadok">
        <Holadok />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Switch>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

const AppWithLoading = LoadingWrapper(App);
export default AppWithLoading;
