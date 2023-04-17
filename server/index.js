"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var chatgpt_1 = require("chatgpt");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
dotenv_1["default"].config();
// let api: ChatGPTAPI | null = null;
// if (process.env.OPENAI_API_KEY) {
//   api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
// }
var api = null;
// if (process.env.OPENAI_ACESS_TOKEN) {
api = new chatgpt_1.ChatGPTUnofficialProxyAPI({
    accessToken: 
    // process.env.OPENAI_ACCESS_TOKEN
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ0aG9tYXMuZ2Vpc3NsQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiREUifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLUdsUHQwdERsU2lDN2pUdURCQlpXSUJ3aCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjMxMjYyYTllZGI0MzVlZmI3Mzc2MDFlIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY3Njg0NDMyNSwiZXhwIjoxNjc4MDUzOTI1LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9mZmxpbmVfYWNjZXNzIn0.rcZJzT6TNm00mTywzghq8hgDj4Z8aG9gVPU-Ojv7GPfiKwkW-eNBtgaJUKR3LegJ8UgT-XaURf-Fpl6ub1rctkJM0-IDnyR77emcRRl9zmnuYZ7VQwkXGcR5oVwte9g1nDtK1TnFjry6TpFGbOOlXl_aw2DWy93q09N81whDLm-mRzh4z9Eil8dcQLBVYj1kJQzMyHk6zQ8SOYAgszpdzto9OdntPqQewiy-bddSGOBEfa68CMb00HUu9c4qRJnT9I_dBCC5nrKVlK7lqQYnGHlzX3YCgbBp6Uqg2UMLX-KXaEKiQagcsnqoPJTgv6G-irT97ksMbE34VgkeN-l7EQ"
});
// }
console.log(api);
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])());
app.post("/chat", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var instructions, greeting, emojis, question, length, response, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    instructions = "always answer as you were a 30 year old woman and as you were flirting. dont be an assistant and be cheeky. never mention what that you are a 30 year old woman. ";
                    greeting = (req.body.id) ? " dont start with a greeting. " : "";
                    emojis = (Math.random() > 0.6) ? " include emojis in your response." : "";
                    question = "ask a question in return. ";
                    length = "the answer should be max double as long as the question. ";
                    if (!api) return [3 /*break*/, 4];
                    console.log("requesting", emojis);
                    if (!req.body.id) return [3 /*break*/, 2];
                    return [4 /*yield*/, api.sendMessage("".concat(instructions, " ").concat(greeting, " ").concat(emojis, " ").concat(length, " ").concat(question, " ").concat(req.body.text), req.body.options)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    res.send(response);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, api.sendMessage("".concat(instructions, " ").concat(emojis, " ").concat(question, " ").concat(req.body.text))];
                case 3:
                    response = _a.sent();
                    console.log(response);
                    res.send(response);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.listen(3030);
