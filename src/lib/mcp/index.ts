import { defineMcp } from "@lovable.dev/mcp-js";
import getKitOverview from "./tools/get-kit-overview";
import searchFaq from "./tools/search-faq";

export default defineMcp({
  name: "kit-3-em-1",
  title: "kit 3 em 1",
  version: "0.1.0",
  instructions: "Public information about the Kit 3 em 1 de Enfermagem. Use `get_kit_overview` for the materials and audience, and `search_faq` for common questions.",
  tools: [getKitOverview, searchFaq],
});
