import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const arrUsers = [
    {
        username: "bobesponja",
		avatar: "https://images-shoptime.b2w.io/produtos/1292518177/imagens/1pc-50-centimetros-naruto-estilo-bob-esponja-e-patrick-estrela-plush-almofadas-anime-bonito-brinquedos-de-pelucia-para-criancas-macia-boneca-de-presente-para-criancas/1292518231_4_large.jpg",
    },
    {
        username: "patrick",
		avatar: "https://i.pinimg.com/originals/2c/86/7c/2c867c1ea6a4b8277f565d3afc25ac10.jpg",
    },
    {
        username: "lula",
		avatar: "https://www.cartacapital.com.br/wp-content/uploads/2022/08/Lula-Constru%C3%A7%C3%A3o-Civil.png",
    },
]

const arrTweets = [
    {
        username: "bobesponja",
	    tweet: "eu sou o naruto esponja"
    },
    {
        username: "patrick",
	    tweet: "eu sou patrick do sharingan"
    },
    {
        username: "lula",
	    tweet: "eu vou ser seu presidente esse ano!"
    },
]

app.post("/sign-up", (req, res)=>{
    arrUsers.push(req.body)
    res.send()
})

app.get("/tweets", (req, resp)=>{

    const novoarrTweets = arrTweets.map((tweet)=>{
        return {
            ...tweet,
            avatar: arrUsers.find((user)=>user.username === tweet.username).avatar 
        }
    })
    resp.send(novoarrTweets.slice(0, 10))
})

app.post("/tweets", (req, resp)=>{
    arrTweets.unshift(req.body)
    resp.send("ok")
})

app.listen(5000,()=>{
    console.log("ta funfando, que beleuza!")
})