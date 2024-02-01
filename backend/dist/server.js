"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/freelancer-chart")
    .then(() => {
    console.log("MongoDB connected.");
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json({}));
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use("/", router_1.default);
    const PORT = 8081;
    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
})
    .catch((err) => {
    console.log("DB connect error.", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map