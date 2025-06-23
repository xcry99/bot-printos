# bot-printos

Codigo base para integrar WhatsApp con ChatGPT usando Node.js.

## Instalación

1. Asegúrate de tener **Node.js** instalado.
2. Clona este repositorio y ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` con tu clave de la API de OpenAI:

```
OPENAI_API_KEY=tu_clave
```

## Uso

Ejecuta el bot con:

```
npm start
```

Se mostrará un código QR en la consola para vincular tu sesión de WhatsApp. Una vez escaneado, el bot responderá cada mensaje entrante utilizando la API de ChatGPT.
