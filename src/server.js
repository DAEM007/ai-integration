const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIapi } = require('openai');

// server setup
const app = express();

// parse body requests
app.use(bodyParser.json());

// handle cors request
app.use(cors());

// chatgpt api endpoint setup
const configuration = new Configuration({
    apiKey: process.env.CHATBOT_KEY
});

const openai = new OpenAIapi(configuration);

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: 'text-curie-001',
        prompt: prompt,
        max_tokens: 2049,
    });

    

});


