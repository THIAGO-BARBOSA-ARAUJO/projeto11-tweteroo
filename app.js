import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const arrUsers = []

const arrTweets = [
    {
        username: "bobesponja",
		avatar: "https://images-shoptime.b2w.io/produtos/1292518177/imagens/1pc-50-centimetros-naruto-estilo-bob-esponja-e-patrick-estrela-plush-almofadas-anime-bonito-brinquedos-de-pelucia-para-criancas-macia-boneca-de-presente-para-criancas/1292518231_4_large.jpg",
	    tweet: "eu sou o naruto esponja"
    },
    {
        username: "patrick",
		avatar: "https://i.pinimg.com/originals/2c/86/7c/2c867c1ea6a4b8277f565d3afc25ac10.jpg",
	    tweet: "eu sou patrick do sharingan"
    },
    {
        username: "lula",
		avatar: "https://www.cartacapital.com.br/wp-content/uploads/2022/08/Lula-Constru%C3%A7%C3%A3o-Civil.png",
	    tweet: "eu vou ser seu presidente esse ano!"
    },
]

app.post("/sign-up", (req, res)=>{
    arrUsers.push(req.body)
    console.log(arrUsers)
    res.send()
})

app.get("/tweets", (req, resp)=>{
    resp.send(arrTweets.slice(0, 10))
})

app.post("/tweets", (req, resp)=>{
    const tweet = {
        ...req.body,
        avatar: arrUsers.find((user)=>user.username === req.body.username).avatar 
    }
    arrTweets.unshift(tweet)
    resp.send("200 ok deu beleuza!")
})

app.listen(5000,()=>{
    console.log("ta funfando, que beleuza!")
})