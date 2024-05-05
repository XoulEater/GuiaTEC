"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(user, date, content, id) {
        this.user = user,
            this.date = date,
            this.content = content,
            this.replies = [];
    }
    //Getters
    getUser() {
        return this.user;
    }
    getdate() {
        return this.date;
    }
    getcontent() {
        return this.content;
    }
    getReplies() {
        return this.replies;
    }
    //Setters
    setUser(user) {
        this.user = user;
    }
    setDate(date) {
        this.date = date;
    }
    setContent(content) {
        this.content = content;
    }
    setReplies(replies) {
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
exports.default = Message;
//# sourceMappingURL=Message.js.map