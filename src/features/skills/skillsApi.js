import { apiProcessor, apiUrl, userId } from "@/utils/apiProcessor";

export const fetchSkillsApi = () => {
  console.log("function reaching here");
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/skills/${userId}`,
  });
};
