<<<<<<< HEAD
const database = require("./../database");
const Sequelize = require("sequelize");

const Artigo = database.define("artigo", {
     
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: Sequelize.STRING,
  titulo: Sequelize.STRING,
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});


=======
const database = require("./../database");
const Sequelize = require("sequelize");

const Artigo = database.define("artigo", {
     
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: Sequelize.STRING,
  titulo: Sequelize.STRING,
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});


>>>>>>> 3708d397a04091178b239bd68cf25298510f0662
module.exports = Artigo;