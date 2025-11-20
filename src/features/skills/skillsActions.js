import { fetchSkillsApi } from "./skillsApi";

export const fetchSkillsAction = async () => {
  const result = await fetchSkillsApi();
  return result;
};
