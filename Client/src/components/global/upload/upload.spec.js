import upload from "./upload.riot";
import { component } from "riot";

describe("My Component upload", () => {

    const myupload = component(upload);
    document.body.appendChild(myupload);
  
});