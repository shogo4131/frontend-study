import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql-pokemon2.vercel.app",
  generates: {
    "src/generate/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      config: {
        defaultScalarType: "unknown",
        enumsAsTypes: true,
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
