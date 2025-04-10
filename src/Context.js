import { createContext, useContext, useEffect, useRef } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navRef = useRef(null);
  const movieCardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (navRef.current && window.scrollY === 0) {
        navRef.current.style.background =
          "linear-gradient(to top, transparent 0%,black 100% )";
        navRef.current.style.transition = "all 0.6s ease-out";
      }
      if (navRef.current && window.scrollY > 10) {
        navRef.current.style.background = "black";
        navRef.current.style.transition = "all 0.6s ease-out";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (movieCardsRef.current) {
        movieCardsRef.current.scrollLeft += e.deltaY;
      }
    };

    const currentRef = movieCardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        navRef,
        movieCardsRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
