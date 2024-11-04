import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/types/graphql/schema.graphql",
  generates: {
    "./src/types/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
      },
    },
  },
};

export default config;

/*
@graphql-codegen/typescript is the base 
plugin needed to generate TypeScript types 
from our schema.

And @graphql-codegen/typescript-resolvers does 
something similar - it will review our schema, 
consider the types and fields we've defined, and 
output the types we need to accurately describe 
what data our resolver functions use and return.
*/

/*
As the value of contextType, we'll pass the filepath to 
our context.ts file, relative to the ./src/types.ts file. 
Our context.ts file is located in the same src folder, 
so our path is "./context". Finally, to point to the 
type we defined in the file, we can tack on 
#DataSourceContext to the end of the file path.
*/
