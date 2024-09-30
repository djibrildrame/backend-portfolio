import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './ContactForm';

const app = express();
const PORT = process.env.PORT || 4000;

// Ajout de logs pour suivre l'exécution
console.log('Middleware de l\'application configuré');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

console.log('Routes configurées');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/backfolio').then(() => {
  console.log('Connecté à MongoDB');
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
}).catch(err => {
  console.error('Échec de la connexion à MongoDB', err);
});

// Ajout d'un test de route pour vérifier le démarrage
app.get('/test', (req, res) => {
  console.log('Route /test atteinte');
  res.send('Le serveur est en cours d\'exécution.');
});
