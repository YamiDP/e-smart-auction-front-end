import { useState } from "react";
import { createContext } from "react";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { API } from "../Configs/api";
import { Footer } from "../Elements/Footer";
import { Header } from "../Elements/Header";
import { useFetch } from "../Hooks/useFetch";
import { useLocation } from 'react-router-dom'
const HomeContext = createContext();
const HomeTemplate = ({ children }) => {
  // Fetch API
  const location = useLocation();
  const inUserProcess = 'user/process'
  const { data: dataMenu, loading: a } = useFetch(API.menu);
  const { data: dataLastAuction, loading: b } = useFetch(
    API.homeLastestAuction
  );
  const { data: dataAllParentCates, loading: c } = useFetch(API.allParentCates);
  const loading = useMemo(() => Boolean(a || b || c), [a, b, c]);
  // View UI
  return (
    <div id="page" className="hfeed site">
      
      {
        !location.pathname.includes(inUserProcess) ?(
          <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <HomeContext.Provider
              value={{
                dataMenu,
                dataLastAuction,
                dataAllParentCates,
              }}
            >
              <Header />
              {children}
            </HomeContext.Provider>
          )}
          <Footer />
          </>
        ): (
          
          <HomeContext.Provider>
          {children}
          </HomeContext.Provider>
        )
      }
   
    </div>
  );
};
export { HomeTemplate, HomeContext };
