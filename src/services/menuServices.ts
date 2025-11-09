import ROUTES from "../lib/env";

interface Menu {
    ID:          number;
    title:       string;
    url:         string;
    description: string;
    parent_id:   string;
    object_id:   string;
    object:      Object;
    type:        Object;
    child_items: Menu[];
}

export const getMenu = async (name: string = 'nav-main') => {
  const response = await fetch(ROUTES.MENU + '?name='+ name);
  if(!response.ok) throw new Error('menu no encontrado');

  const data:Menu[] = await response.json();
  return data;
};