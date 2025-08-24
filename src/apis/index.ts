import { DEV_TO_URL, DEV_TO_USERNAME } from "@/constants/api";

export const fetchBlogsFromDevto = async () => {
  const URL = `${DEV_TO_URL}?username=${DEV_TO_USERNAME}`;
  const res = await fetch(URL);
  return res.json();
};
