import AlertDTO from "../DTOs/alert"

export default class Notification {
  private title: string;
  private body: string;
  private postDate: Date;

  public constructor(
    title: string | AlertDTO,
    body?: string
    ) {
    if (typeof title === "string"){
      this.title = title;
      this.body = body;
      this.postDate = new Date();
    }else{
      this.title = title.title;
      this.body = title.body;
      this.postDate = new Date();
    }
  }

  public getTitle(): string {
    return this.title;
  }

  public getBody(): string {
    return this.body;
  }

  public getPostDate(): Date {
    return this.postDate;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
}
