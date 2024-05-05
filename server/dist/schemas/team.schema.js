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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// TODO: delete this file
const teamSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
// Create and export the Teacher model
exports.default = mongoose_1.default.model("Team", teamSchema);
// {
//   "id" : "T1",
//   "name" : "Team 1",
//   "description" : "This is the first team",
//   "workPlans" : ["WP1", "WP2"],
//   "members" : [{
//   "name" : "Teacher 1",
//   "email" : "hola@gmail.com  ",
//   "password" : "12345",
//   "photo" : "https://images.pexels.com",
//   "officePNumber" : "123456",
//   "personalPNumber" : "123456",
//   "isLeader" : false,
//   "campus" : "AL"
// }]
// }
//# sourceMappingURL=team.schema.js.map