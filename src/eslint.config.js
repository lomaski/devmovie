import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Configuração de arquivos, ambiente Node e React
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.browser // Recomendado adicionar se o seu React rodar no navegador
      } 
    } 
  },
  
  // 2. Configuração Recomendada do React
  pluginReact.configs.flat.recommended,

  // 3. Configuração dos React Hooks
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // 4. Integração do Prettier para apontar erros de formatação
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // 5. Desativa regras conflitantes (Sempre por último)
  configPrettier,
]);
