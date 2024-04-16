import Card from "./card.riot";
import { component } from "riot";

describe("My Component card", () => {

    const mycard = component(Card);
    document.body.appendChild(mycard);
  
});