import { llmsTxt } from "@/lib/agent";

// /llms.txt — what this site is, when an agent should reach for it, and when it
// should send someone elsewhere. Served as plain text so it renders in a
// browser tab as readily as it parses.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
