const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Be careful or you could fall for some tricks today.",
					 "Because you demand more from yourself, others respect you deeply.",
					 "Carve your name on their hearts and not in marble.", 
           "Distance yourself from the vain.",
           "Man's mind, once stretched by a new idea, never regains it's original dimensions.",
           "Miles are covered one step at a time."
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

let rainArray = []

app.post('/api/rainbow', (req, res)=>{
  const {color} = req.body
    rainArray.push(color)
    res.status(200).send(rainArray)
})

app.delete('/api/rainbow', (req, res)=>{
  rainArray.pop()
  res.status(200).send(rainArray)
})

let userArray = []

app.post('/api/user', (req, res)=>{
  userArray.push(req.body)
  res.status(200).send(userArray)
})

app.put('/api/user/:username', (req, res)=>{
  let {username} = req.params
  let {password} = req.body
  console.log (username, password)
  for (i = 0; i< userArray.length; i++){
    if (userArray[i].username === username){
      userArray[i].password = password
      res.status(200).send(userArray)
    }else {
      res.status(400).send('user not found')
    }
  }
})
  








app.listen(4000, () => console.log("Server running on 4000"));
