import { getProjectsApi } from "./projectApi";

export const getProjectsAction = async () => {
  const result = await getProjectsApi();
  return result;
};
