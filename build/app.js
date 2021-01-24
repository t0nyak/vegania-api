"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use((req, res, next) => {
    const error = new Error('Route not found');
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: 'error',
        message: error.message,
    });
    next();
});
app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Welcome to Vegania API Rest',
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Vegania API Rest listening in ${PORT}`));
