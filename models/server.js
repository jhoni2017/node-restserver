const express=require('express');
const cors=require('cors');


class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuarioPath='/api/usuarios';
        //middlewares
        this.middlewares();
        //rutas de la aplicacion 
        this.routes();
    }
    middlewares(){
        // cors
        this.app.use(cors())
        this.app.use(express.static('public'));
        //lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){

        this.app.use(this.usuarioPath, require('../routes/usuarios'))
        

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor correindoe en el puerto ',this.port);
        });
    }




}
module.exports=Server;