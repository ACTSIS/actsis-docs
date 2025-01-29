import Loading from './Loading';
import { msalConfig } from './AuthConfig';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Login } from '@actsis/docusaurus-theme';
import { useLocation } from '@docusaurus/router';
import React, { useState, useEffect } from 'react';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

// Instancia de MSAL
const msalInstance = new PublicClientApplication(msalConfig);

export default function Root({ children }) {
    const [authLoading, setAuthLoading] = useState(true);
    const [activeAccount, setActiveAccount] = useState(null);

    // Para saber qué ruta estás visitando en Docusaurus
    const location = useLocation();

    // Inicialización y manejo de estado de autenticación
    useEffect(() => {
        const initializeMsal = async () => {
            try {
                await msalInstance.initialize();
                console.log("MSAL inicializado correctamente");

                // Verificar si hay una sesión activa al cargar
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

        // Configurar callback de eventos (LOGIN_SUCCESS / LOGOUT_SUCCESS)
        const eventCallback = (event) => {
            if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
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

    // Determina si la ruta actual apunta a la carpeta "IT"
    const isProtectedRoute = location.pathname.startsWith('/docs/IT');

    return (
        <MsalProvider instance={msalInstance}>
            {/*
        Si la ruta está protegida, usamos los templated de Authenticated/Unauthenticated.
        Si NO está protegida, simplemente mostramos children sin forzar login.
      */}
            {isProtectedRoute ? (
                <>
                    {/* Si el usuario ya está logueado, muestra el contenido */}
                    <AuthenticatedTemplate>
                        {children}
                    </AuthenticatedTemplate>

                    {/* Si NO está logueado, muestra la pantalla de “Por favor inicie sesión…” */}
                    <UnauthenticatedTemplate>
                        <Login
                            msalInstance={msalInstance}
                            setAuthLoading={setAuthLoading}
                        />
                    </UnauthenticatedTemplate>
                </>
            ) : (
                // Si NO es ruta protegida, renderiza el contenido sin forzar login
                children
            )}
        </MsalProvider>
    );
}
