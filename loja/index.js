import express from 'express';
const app = express();
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/conteudo/index.html');
});

app.get('/produtos', function(req,res){
    res.sendFile(__dirname + '/conteudo/produtos.html');
});

app.get('/sobre', function(req,res){
    res.sendFile(__dirname + '/conteudo/sobre.html');
});

app.listen(3000, function(){
    console.log('Servidor rodado na porta http://localhost:3000');
});
