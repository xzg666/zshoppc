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
            if (item.url) {
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
                debugger
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