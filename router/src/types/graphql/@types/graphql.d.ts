//Need For ts to include grapql schema
declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;

  export = Schema;
}
