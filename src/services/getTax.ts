import ROUTES from "../lib/env";

export const getTaxonomies = async (taxName: string = '') => {
  const response = await fetch(ROUTES.TAX + '?tax=' + taxName);
  if(!response.ok) throw new Error('option page not found');
  const dataResponse  = await response.json();
  return dataResponse;
}