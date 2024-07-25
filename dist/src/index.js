"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("react-dom/client"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = client_1.default.createRoot(rootElement);
    root.render(/>
        < /React.StrictMode>);
}
(0, reportWebVitals_1.default)();
