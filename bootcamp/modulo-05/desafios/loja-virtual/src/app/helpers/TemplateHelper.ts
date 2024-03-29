import handlebars from "handlebars";
import fs from 'fs';

export const createTemplate = (path) => {
  const htmlFile = fs.readFileSync(path, "utf-8");

  handlebars.registerHelper("numberFormat", (number: Number) => {
    return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  })

  const template = handlebars.compile(htmlFile);
  return template;
}