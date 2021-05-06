import axios from 'axios'
export const api = axios.create({
    baseURL: "http://localhost:3333/"
})
// axios serve p conectar o front-end com o banco de dados mas nesse caso está simulando um banco de dados
// tanto que na pasta package.json adicionei um script colocando o server json na porta 3333 e aqui ele exporta

   
    
