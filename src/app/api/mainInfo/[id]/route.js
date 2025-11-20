import { getMainInfo } from "@/controllers/infoController";

export async function GET(req, context) {
  const { id } = await context.params;
  return getMainInfo(id);
}
