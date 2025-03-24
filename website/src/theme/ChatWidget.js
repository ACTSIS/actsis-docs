import React, { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ChatWidget() {
  const {siteConfig} = useDocusaurusContext();
  const {webhookUrl} = siteConfig.customFields.chatConfig;

  useEffect(() => {
    createChat({
      webhookUrl,
      // Configuración adicional (opcional)
      showWelcomeScreen: true,
      defaultLanguage: "es",
      initialMessages: ["¡Hola! 👋", "¿En qué puedo ayudarte hoy?"],
      i18n: {
        en: {
          title: "¡Hola!",
          subtitle: "Estamos aquí para ayudarte 24/7.",
          footer: "",
          getStarted: "Nueva Conversación",
          inputPlaceholder: "Escribe tu pregunta...",
        },
        es: {
          title: "¡Hola!",
          subtitle: "Estamos aquí para ayudarte 24/7.",
          footer: "",
          getStarted: "Nueva Conversación",
          inputPlaceholder: "Escribe tu pregunta...",
        },
      },
    });
  }, []);

  return null; // Este componente no renderiza nada visible
}
