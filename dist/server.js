"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const client_1 = __importDefault(require("./views/client"));
const admin_1 = __importDefault(require("./views/admin"));
const api_1 = __importDefault(require("./views/api"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// create express app
const app = (0, express_1.default)();
// for api testing
app.use((0, cors_1.default)());
// body parser middleware
app.use((0, body_parser_1.default)());
app.use((0, express_1.urlencoded)({ extended: false }));
// Serve API under `/api/v2/kalaimahal/sembanarkiol`
app.use('/api/v2/kalaimahal/sembanarkiol', api_1.default);
// Serve React App 2 under `/app2`
app.use('/admin/v2', admin_1.default);
// Serve React App 1 under `/app1`
app.use('/', client_1.default);
// Catch-all for unmatched routes
app.use((req, res) => {
    console.log(req.url);
    res.status(404).json({ error: 'Route not found' });
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port \x1b[36mhttp://localhost:${PORT}`);
});
