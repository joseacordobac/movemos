import ROUTES from "../lib/env";

export const getPages = async (title: string = '') => {
  const response = await fetch(
    ROUTES.PAGES + '?title='+ title 
  );
  if(!response.ok) throw new Error('option page not found');

  const data = await response.json();
  return data;
};

export const getPageBySlug = async (slug: string = '') => {
  const response = await fetch(ROUTES.PAGES + '?slug=' + slug);
  if(!response.ok) throw new Error('option page not found');

  const data = await response.json();
  return data;
};