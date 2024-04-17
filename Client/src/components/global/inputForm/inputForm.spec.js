import InputForm from "./InputForm.riot";
import { component } from "riot";

describe("My Component input", () => {

    const myinput = component(InputForm);
    document.body.appendChild(myinput);
  
});