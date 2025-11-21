import { apiProcessor, apiUrl, userId } from "@/utils/apiProcessor";

export const fetchSkillsApi = () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/skills/${userId}`,
  });
};
