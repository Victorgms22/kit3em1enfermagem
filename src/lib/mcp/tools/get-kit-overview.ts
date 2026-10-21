import { defineTool } from "@lovable.dev/mcp-js";
import { KIT_NAME, MATERIAIS, PASSOS, PRICE_STATUS, PUBLICO, overviewText } from "../../kit-content";

export default defineTool({
  name: "get_kit_overview",
  title: "Kit overview",
  description: "Describe the Kit 3 em 1 de Enfermagem: its 3 materials, audience, how to use it and price status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: overviewText() }],
    structuredContent: {
      nome: KIT_NAME,
      preco: PRICE_STATUS,
      materiais: MATERIAIS.map(({ titulo, descricao }) => ({ titulo, descricao })),
      publico: [...PUBLICO],
      passos: [...PASSOS],
    },
  }),
});
