const { response, request } = require("express");

const usuariosGet=(req=request,res=response)=>{
    const {q, nombre="sin nombre", apikey}=req.query;
    res.json({
     msg:'get api-usuariosGet ',
     q,
     nombre,
     apikey
    });
 }

 const usuariosPost=(req,res=response)=>{
    const {nombre, edad}=req.body;
    res.json({
        msg:'post api-usuariosPost ',
        nombre,
        edad

    });
 }
 const usuariosPut=(req,res=response)=>{
    const {id,edad}=req.params;
    res.json({
        msg:'put api-usuariosPut ',
        id

    });
 }
 const usuariosPatch=(req,res=response)=>{
    res.json({
        msg:'patch api-usuariosPatch '

    });
 }
 const usuariosDelete=(req,res=response)=>{
    res.json({
        msg:'delete api-usuariosDelete '

    });
 }
 
 

 module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
 }