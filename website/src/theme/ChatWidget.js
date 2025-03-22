import React, {
    useEffect
} from 'react';
import '@n8n/chat/style.css';
import {
    createChat
} from '@n8n/chat';

export default function ChatWidget() {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://n8n.rondon.cloud/webhook/0b30f927-3fb2-45d0-a1f8-7cf66ba053d0/chat',
            // Configuración adicional (opcional)
            showWelcomeScreen: true,
            defaultLanguage: 'es',
            initialMessages: [
                '¡Hola! 👋',
                '¿En qué puedo ayudarte hoy?'
            ],
            i18n: {
                en: {
                    title: '¡Hola!',
                    subtitle: "Estamos aquí para ayudarte 24/7.",
                    footer: '',
                    getStarted: 'Nueva Conversación',
                    inputPlaceholder: 'Escribe tu pregunta...',
                },
                es: {
                    title: '¡Hola!',
                    subtitle: "Estamos aquí para ayudarte 24/7.",
                    footer: '',
                    getStarted: 'Nueva Conversación',
                    inputPlaceholder: 'Escribe tu pregunta...',
                },
            },
        });
    }, []);

    return null; // Este componente no renderiza nada visible
}
