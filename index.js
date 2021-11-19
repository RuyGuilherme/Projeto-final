require('dotenv').config()
const express = require("express");

const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

let message = "";

const Artigos = require("./models/catalogo");

app.get("/", async (req, res) => {
      const artigo = await Artigos.findAll();

    res.render("index", {
      artigo, message
    });
  });

app.get("/login/:id", (req, res) => {
    res.render("detalhes",{message});
  });
  
app.get("/login", async (req, res) => {
    const artigo = await Artigos.findAll();

   res.render("login", {
    artigo, message
    });
  });

  app.get("/detalhes/:id", (req, res) => {
    res.render("detalhes",{message});
  });
  
  app.get("/detalhes/:id", async (req, res) => {
  
    const artigo = await Artigos.findByPk(req.params.id); 
  
    res.render("detalhes", {
      artigo,
    });
  });

  app.get("/criar", (req, res) => {
    res.render("criar", {message});
  });
  
  app.post("/criar", async (req, res) => {
  
    const { nome, email, titulo, descricao, imagem } = req.body;
  
    if (!nome) {
      res.render("criar", {
        message: "Nome é obrigatório",
      });
    }
  
    else if (!imagem) {
      res.render("criar", {
        message: "Imagem é obrigatório",
      });
    }

    else if (!email) {
      res.render("criar", {
        message: "Email é obrigatório",
      });
    }

    else if (!titulo) {
      res.render("criar", {
        message: "Titulo é obrigatório",
      });
    }
  
    else {
      try {
        const artigo = await Artigos.create({
          nome,
          email,
          titulo,
          descricao,
          imagem,
        });
  
        res.redirect("/");
      } catch (err) {
        console.log(err);
  
        res.render("criar", {
          message: "Ocorreu um erro ao cadastrar!",
        });
      }
    }
  });

  app.get("/editar/:id", async (req, res) => {

    const artigo = await Artigos.findByPk(req.params.id);
  
    if (!artigo) {
      res.render("editar", {
        Artigos,
        message: "Informação não encontrada!",
      });
    }
  
    res.render("editar", {
      Artigos, message
    });
  });
  
  app.post("/editar/:id", async (req, res) => {
  
    const artigo = await Artigos.findByPk(req.params.id);
  
    const { nome, email, titulo, descricao, imagem  } = req.body;
  
    artigo.nome = nome;
    artigo.email = email;
    artigo.titulo = titulo;
    artigo.descricao = descricao;
    artigo.imagem = imagem;
  
    const artigoEditado = await Artigos.save();
  
    res.render("editar", {
      artigo: artigoEditado,
      message: "Artigo editado com sucesso!",
    });
  });

  app.get("/deletar/:id", async (req, res) => {
    const artigo = await Artigos.findByPk(req.params.id);
  
    if (!artigo) {
      res.render("deletar", {
        Artigos,
        message: "Artigo não foi encontrado!",
      });
    }
  
      res.render("deletar", {
      Artigos, message
    });
  });
  
  app.post("/deletar/:id", async (req, res) => {
    const artigo = await Artigos.findByPk(req.params.id);
  
    if (!artigo) {
      res.render("deletar", {
        mensagem: "Musica não foi encontrado!",
      });
    }
  
    await Artigos.destroy();
  
    res.redirect("/");
  });

  app.post("/subscription", (req, res) => {
    const { nome, email, publi, titulo } = req.body;
    formula.push({ nome, email, publi, titulo });

    message = `Parabéns ${nome}, o seu post foi publicado com sucesso!`;
    res.redirect("/");
  });
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));