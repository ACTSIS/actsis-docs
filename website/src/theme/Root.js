import React from 'react';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig } from '../AuthConfig';
import { PublicClientApplication, EventType } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        msalInstance.setActiveAccount(event.payload.account);
        console.log("Cuenta activa después del inicio de sesión:", event.payload.account);
    }
});

export default function Root({ children }) {
    const activeAccount = msalInstance.getActiveAccount();

    // Debug para verificar la cuenta activa
    console.log("Cuenta activa al cargar la página:", activeAccount);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                {/* Muestra el contenido de Docusaurus si está autenticado */}
                {children}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                {/* Muestra un botón de inicio de sesión si no está autenticado */}
                <div style={{ margin: 'auto', textAlign: 'center' }}>
                    <h1>Por favor, inicia sesión para ver el contenido</h1>
                    <button
                        onClick={() =>
                            msalInstance
                                .loginPopup()
                                .then(() => console.log("Inicio de sesión exitoso"))
                                .catch((e) => console.error("Error al iniciar sesión:", e))
                        }
                    >
                        Iniciar sesión
                    </button>
                </div>
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
}
