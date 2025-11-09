const domain = 'http://movemo-marcas.test/wp-json' 
const nameSpace = '/headless-api/v1'

const ROUTES = {
    MENU: domain + nameSpace + '/menu',
    PAGES: domain + nameSpace + '/pages',
    POSTS: domain + nameSpace + '/posts',
    SLUGS: domain + nameSpace + '/post-slugs',
    CONFIG: domain + nameSpace + '/config',
    TAX: domain + nameSpace + '/taxonomies'
}

export default ROUTES