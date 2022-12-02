const express = require('express');
const db = require('./models/db')
const User = require('./models/User');
const app = express();

app.use(express.json());


app.get("/user", async (req, res) => {

    await User.findAll({
        attributes: ['id', 'name', 'price'], 
        order: [['id', 'DESC']]})
    .then((product) => {
        return res.json({
            erro: false,
           product
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Error: No product found!"
        });
    });    
});


app.get("/user/:id", async (req, res) => {
    const { id } = req.params;


    await User.findByPk(id)
    .then((product) => {
        return res.json({
            erro: false,
           product: product
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Error: No product found!"
        });
    });
});


app.put("/user", async (req, res) => {
    const { id } = req.body;  
    
    await User.update(req.body, {where: {id}})
    .then(() => {
            return res.json({
                erro: false,
                mensagem: "Product edited successfully!"
            });
            
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Error: Product has not been edited!"
            });
        });
    });
    
    app.post("/user", async (req, res) => {
        const { name, price } = req.body;   
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "  Product successfully registered!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Error: the product has not been registered!"
        });
    });    
});

app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;    
    
    await User.destroy({ where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Product deleted successfully!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Error: Product not successfully deleted!"
        });
    });
});

app.listen(8080, () => {

    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});