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
    {
        username: "bobesponja",
	    tweet: "eu sou o naruto esponja"
    },
    {
        username: "patrick",
	    tweet: "começo da segunda parte"
    },
    {
        username: "lula",
	    tweet: "eu vou ser seu presidente esse ano!"
    },
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
	    tweet: "começo da terceira parte"
    }
]
    console.log()
app.post("/sign-up", (req, res)=>{
    const { avatar } = req.body
    const { user : username } = req.headers

    if(!username || !avatar ){
        res.status(400).send("Todos os campos são obrigatórios")
        return
    }
    arrUsers.push({username, avatar})
    res.status(201).send("OK")
})

app.get("/tweets", (req, resp)=>{
    
    const { page } = req.query

    const pagina = Number(page)
    
    const limitpaginas = Math.ceil(arrTweets.length / 10)

    if(page){
        if(pagina >= 1 && pagina <= limitpaginas){
            const novoarrTweets = arrTweets.map((tweet)=>{
                return {
                    ...tweet,
                    avatar: arrUsers.find((user)=>user.username === tweet.username).avatar 
                }
            })
            resp.send(novoarrTweets.slice(pagina*10-10, pagina*10))
        }else{
            resp.status(400).send("Informe uma página válida!")
            return
        }
    }
    else if(page === ""){
        resp.status(400).send("Informe uma página!")
        return
    }
    else{
        const novoarrTweets = arrTweets.map((tweet)=>{
            return {
                ...tweet,
                avatar: arrUsers.find((user)=>user.username === tweet.username).avatar 
            }
        })
        resp.send(novoarrTweets.slice(0, 10))
    }
})

app.get("/tweets/:username", (req, res)=>{
    const { username } = req.params

    const userExists = arrUsers.find(exists => exists.username === username)

    if(!userExists) {
        res.status(404).send("Usuário não encontrado")
        return
    }

    const novoarrTweets = arrTweets.filter(tweet => tweet.username === username).map((tweet)=>{
        return {
            ...tweet,
            avatar: arrUsers.find((user)=>user.username === tweet.username).avatar 
        }
    })
    res.send(novoarrTweets.slice(0, 10))
})

app.post("/tweets", (req, resp)=>{
    const { username, tweet } = req.body
    if(!username || !tweet ){
        resp.status(400).send("Todos os campos são obrigatórios")
        return
    }
    arrTweets.unshift({username, tweet})
    resp.status(201).send("ok")
})


app.listen(5000,()=>{
    console.log("ta funfando, que beleuza!")
})