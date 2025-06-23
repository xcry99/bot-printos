require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code above to log in.');
});

client.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

client.on('message', async msg => {
  try {
    if (msg.body) {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: msg.body }],
      });
      const reply = response.data.choices[0].message.content.trim();
      msg.reply(reply);
    }
  } catch (err) {
    console.error('Error getting response from OpenAI:', err.message);
    msg.reply('Lo siento, hubo un error procesando tu mensaje.');
  }
});

client.initialize();
