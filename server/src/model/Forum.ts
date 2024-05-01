import Message from "./Message";

export default class Forum {

    private messages?: Array<Message> // list of messages of the forum

    // Constructor
    private constructor(
      messages?: Array<Message> // list of messages of the forum
    ) {
        messages = [];
    }
    public getMessages(): Array<Message> {
        return this.messages;
    }
    public setMessages(messages: Array<Message>): void{
        this.messages = messages;
    }
    public addMessage(message: Message):void{
        this.messages.push(message);
    }
  }