import { apiProcessor, apiUrl, userId } from "@/utils/apiProcessor";

export const getProjectsApi = () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/projects/${userId}`,
  });
};
