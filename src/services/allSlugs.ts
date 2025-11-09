import ROUTES from "../lib/env";

export const getAllSlugs = async (cpt: string) => {
  const response = await fetch(ROUTES.SLUGS + '?post_type=' + cpt);
  if(!response.ok) throw new Error('option page not found');
  const dataResponse  = await response.json();
  return dataResponse;
}