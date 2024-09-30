"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const ContactForm_1 = __importDefault(require("./ContactForm"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Ajout de logs pour suivre l'exécution
console.log('Middleware de l\'application configuré');
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', ContactForm_1.default);
console.log('Routes configurées');
// Connexion à MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/backfolio').then(() => {
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
