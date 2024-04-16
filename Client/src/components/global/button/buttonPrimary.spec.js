import ButtonPrimary from "./buttonPrimary.riot";
import { component } from "riot";

describe("My Component button", () => {

    const myButton = component(ButtonPrimary);
    document.body.appendChild(myButton);
  
});
