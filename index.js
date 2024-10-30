const e = require('express');
const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

let eventos = []
let indexCounter = 1

app.post('/eventos',(req,res)=>{
    const{nome,data,local}= req.body;
    const novoEvento = {id:indexCounter++,nome,data,local};
   
    eventos.push(novoEvento);
   
    res.status(201).json(novoEvento);
})

app.get('/eventos',(req,res)=>{
    res.json(eventos);
})

app.put('/eventos/:id',(req,res)=>{
    const eventoID = parseInt(req.params.id);
    const {nome,data,local} = req.body;
   
    const evento = eventos.find(e=>e.id === eventoID);

    if(evento){
        if(evento.nome != nome && nome != null){
            evento.nome = nome;
        }

        
        if(evento.data != data && data != null){
            evento.data = data;
        }

        
        if(evento.local != local && local != null){
            evento.local = local;
        }

        res.json(evento);
    }else{
        res.status(404).json({message:"Evento não encontrado"})
    }
        
    }

    
)

app.get('/teste',(req,res)=>{
    res.send('está tudo bem')
})


app.listen(port,()=>{
    console.log('o servidor está rodando na porta: ' +port);
    
})