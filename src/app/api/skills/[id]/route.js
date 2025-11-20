import { getSkills } from "@/controllers/skillsController";

export async function GET(req, context) {
  const { id } = await context.params;
  return getSkills(id);
}
