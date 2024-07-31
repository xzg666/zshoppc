import type { RouteRecordRaw } from 'vue-router'
import constantRouterMap from '@/router/src'

interface routeArrType {
    url: string
    path: string
    name: string
    icon: string
    children?: routeArrType[]
}

export function getAllUrls(arr: routeArrType[]) {
    let res: string[] = []

    const _traverse = (routeArr: routeArrType[]) => {
        routeArr.forEach(item => {
            if (!item.children && item.url) {
                res.push(item.url)
            }

            if (item.children) {
                _traverse(item.children)
            }
        })
    }

    _traverse(arr)

    return res
}

interface constantRouterMapType {
    // RouteConstant?: routeArrType[]
    // RouteEntity?: routeArrType[]
    // RouteWxapp?: routeArrType[]
    [key: string]: any
}

export function filterMenuRoute(constantRouterMap: constantRouterMapType, menuUrls: string[]) {
    const newRouter: routeArrType[] = []
    Object.keys(constantRouterMap).forEach((key: any) => {
        if (key != 'RouteConstant') {
            const route = constantRouterMap[key as string]
            if (!route.children) {
                if (menuUrls.includes(route.path)) {
                    newRouter.push(route)
                }
            } else {
                const _route = {
                    ...route,
                    children: []
                }
                _route.children = route.children.filter((item: routeArrType) => {
                    return menuUrls.includes(`${route.path}/${item.path}`)
                })
            }
        }
    })
    return newRouter
}


export let firstMenuUrl: string | null = null

export function mapMenusToRoute(userMenus: any[]) {

    let menuUrls: string[] = []
    //根据permission获取所有的url
    menuUrls = getAllUrls(userMenus)
    // console.log('menuUrls', menuUrls, constantRouterMap, Object.keys(constantRouterMap));

    if (!firstMenuUrl) {
        firstMenuUrl = menuUrls[0]
    }

    const newRouter: RouteRecordRaw[] = []
    Object.keys(constantRouterMap).forEach(key => {
        if (key != 'RouteConstant') {
            const route = (constantRouterMap as any)[key]
            if (!route.children) {
                if (menuUrls.includes(route.path)) {
                    newRouter.push(route)
                }
            } else {
                const _route = {
                    ...route,
                    children: []
                }

                _route.children = route.children.filter((item: any) => {
                    return menuUrls.includes(`${route.path}${item.path && ('/' + item.path)}`)
                })
                newRouter.push(_route)
            }
        }
    })

    // console.log('newRouter', newRouter);
    return newRouter
}

export function mapPathToMenu(path: string, userMenus: any[]) {
    // console.log(path, userMenus);
    let mainMenu = userMenus.find(menu => path.includes(menu.url)).url

    let mainMenuIndex = userMenus.findIndex(menu => path.includes(menu.url))
    //主菜单，子菜单，主菜单索引
    return [mainMenu, path, mainMenuIndex]
}