import { getProjects } from "@/controllers/projectsController";

export async function GET(req, context) {
  const { id } = await context.params;
  return getProjects(id);
}
