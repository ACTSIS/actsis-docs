import Loading from "./Loading";
import { msalConfig } from "./AuthConfig";
import { Login } from "@actsis/docusaurus-theme";
import { useLocation } from "@docusaurus/router";
import React, { useState, useEffect } from "react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import ChatWidget from "./ChatWidget";

// Detectar entorno de desarrollo
const isDevEnvironment = process.env.NODE_ENV === "development";

// Crear instancia de MSAL solo en producción
let msalInstance = null;
if (!isDevEnvironment) {
  msalInstance = new PublicClientApplication(msalConfig);
}

export default function Root({ children }) {
  const [authLoading, setAuthLoading] = useState(!isDevEnvironment);
  const [activeAccount, setActiveAccount] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (isDevEnvironment) {
      // Bypass completo de autenticación en desarrollo
      setAuthLoading(false);
      return;
    }

    // Lógica de autenticación solo para producción
    const initializeMsal = async () => {
      try {
        await msalInstance.initialize();
        console.log("MSAL inicializado correctamente");

        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          setActiveAccount(accounts[0]);
          msalInstance.setActiveAccount(accounts[0]);
        }
      } catch (error) {
        console.error("Error inicializando MSAL:", error);
      } finally {
        setAuthLoading(false);
      }
    };

    const eventCallback = (event) => {
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        setActiveAccount(event.payload.account);
        msalInstance.setActiveAccount(event.payload.account);
      } else if (event.eventType === EventType.LOGOUT_SUCCESS) {
        setActiveAccount(null);
      }
    };

    const eventId = msalInstance.addEventCallback(eventCallback);
    initializeMsal();

    return () => msalInstance.removeEventCallback(eventId);
  }, []);

  if (authLoading) {
    return <Loading />;
  }

  const isProtectedRoute = location.pathname.startsWith("/installs");

  return (
    <>
      {isDevEnvironment ? (
        // Modo desarrollo: Bypass completo de autenticación
        <>{children} </>
      ) : (
        // Modo producción: Lógica original de autenticación
        <MsalProvider instance={msalInstance}>
          {" "}
          {isProtectedRoute ? (
            <>
              <AuthenticatedTemplate>
                {" "}
                {children} <ChatWidget />
              </AuthenticatedTemplate>{" "}
              <UnauthenticatedTemplate>
                <Login
                  msalInstance={msalInstance}
                  setAuthLoading={setAuthLoading}
                />{" "}
              </UnauthenticatedTemplate>{" "}
            </>
          ) : (
            <>{children} </>
          )}{" "}
        </MsalProvider>
      )}{" "}
    </>
  );
}
