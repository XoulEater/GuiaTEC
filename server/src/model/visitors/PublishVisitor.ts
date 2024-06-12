import Activity from "../Activity";
import Visitor from "../Visitor";

export class PublishVisitor implements Visitor {
  visitActivity(activity: Activity): void {}
}
