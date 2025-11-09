import ROUTES from "../lib/env";

export const getOptionPage = async () => {
  const response = await fetch(ROUTES.CONFIG);
  if(!response.ok) throw new Error('option page not found');

  const data = await response.json();
  return data;
};