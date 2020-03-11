"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ReportStatus",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  },
  {
    name: "Form",
    embedded: false
  },
  {
    name: "FormCard",
    embedded: false
  },
  {
    name: "Card",
    embedded: false
  },
  {
    name: "CardField",
    embedded: false
  },
  {
    name: "FieldType",
    embedded: false
  },
  {
    name: "FieldOption",
    embedded: false
  },
  {
    name: "Field",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
