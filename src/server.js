const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');

// server setup
const app = express();

// parse body requests
app.use(bodyParser.json());

// handle cors request
app.use(cors());

// chatgpt api endpoint setup
const openai = new OpenAI({
    apiKey: process.env.CHATBOT_KEY,
});

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
              "role": "system",
              "content": "You are a helpful assistant."
            },
            {
              "role": "user",
              "content": prompt,
            }
          ],
    });

    res.send(completion.choices[0].message.content);
    // console.log(completion.choices[0].message.content);

});

// start the server...
const PORT = 5555;

app.listen(PORT, (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log(`server istening on port ${PORT}.`);
    console.log(`http://localhost:${PORT}`);
});


