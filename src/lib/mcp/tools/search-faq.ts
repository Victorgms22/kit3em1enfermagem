import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faqText } from "../../kit-content";

export default defineTool({
  name: "search_faq",
  title: "Search FAQ",
  description: "List the kit's frequently asked questions, optionally filtered by a keyword (Portuguese).",
  inputSchema: { query: z.string().max(100).optional().describe("Optional keyword, e.g. 'celular' or 'pagamento'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const { items, text } = faqText(query);
    return {
      content: [{ type: "text", text }],
      structuredContent: { perguntas: items.map(({ pergunta, resposta }) => ({ pergunta, resposta })) },
    };
  },
});
