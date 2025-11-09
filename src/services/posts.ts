import ROUTES from "../lib/env";

export const getPosts = async (slug: string = '', perPage:number = 3) => {
  const response = await fetch(ROUTES.POSTS + '/'+ slug+'?per_page='+perPage);
  if(!response.ok) throw new Error('option page not found');
  const dataResponse  = await response.json();
  return dataResponse;
}

export const getListPost = async (postType:string = '', perPage:number = 3, slug:any = false) => {

  const query =
    '?per_page=' + perPage +
    '&post_type=' + postType +
    (slug ? ('&slug=' + slug) : '');

  console.log(ROUTES.POSTS + query)

  const response = await fetch(ROUTES.POSTS + query);
  if(!response.ok) throw new Error('pagina no encontrada');
  const dataResponse  = await response.json();
  return dataResponse;
}