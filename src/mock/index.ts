//引入mock.js
import Mock from 'mockjs'
import { categoryList } from './category'
import { goodList } from './good'
import { menuList } from './menu'
import { tagList } from './tag'


//godo
//查询所有
// 使用 Mock.js 模拟 GET 请求  
Mock.mock('/mockapi/good', 'get', (options: any) => {
    // 从查询参数中提取 page_size 和 page_no  
    let body = JSON.parse(options.body)
    const { page_size, page_no } = body || {};

    // 根据查询参数处理数据（这里只是简单地返回所有数据）  
    // 在实际应用中，你可能需要根据 page_size 和 page_no 来分页数据  
    const total = goodList.length;
    const list = goodList.slice((page_no - 1) * page_size, page_no * page_size);

    // 返回模拟的数据  
    return {
        list,
        total,
    };
});

//增加数据接口：
Mock.mock('/mockapi/good', 'post', (options: any) => {
    let body = JSON.parse(options.body) // 获取请求参数
    let id = parseInt(body.id)
    let flag = true

    for (let item of goodList) {
        if (item.id === id) flag = false // 判断id是否已经存在
    }

    // 如果id不存在
    if (flag) {
        goodList.push(
            {
                product: body.product,
                id
            }
        )
        return {
            goodList,
            status: 200,
            msg: '添加成功'
        }
    }
    // 如果id已存在
    return {
        status: 400,
        msg: '添加失败，id已存在'
    }
})

//删除数据接口
Mock.mock('/mockapi/good', 'delete', (options: any) => {
    let id = parseInt(JSON.parse(options.body).id) // 获取请求id
    let index = null

    for (let i in goodList) {
        if (goodList[i].id === id) index = i // 获取id对应的index
    }

    if (index !== null) {
        console.log(`删除的id为：${id}，对应的index为：${index}`)
        goodList.splice(index, 1) // 从index开始删除一个（本身）
        return {
            goodList,
            status: 200,
            msg: '删除成功'
        }
    }
    return {
        status: 400,
        msg: '删除失败，id不存在'
    }
})

//修改数据接口
Mock.mock('/mockapi/good', 'put', options => {
    const body = JSON.parse(options.body) // 解析请求参数（只能解析到这）
    const id = parseInt(body.id) // 获取请求id
    let index = null

    for (let i in goodList) {
        if (categoryList[i].id === id) { // 判断id是否已经存在
            index = i // 拿到id对应的index
        }
    }

    // 如果id存在
    if (index != null) {
        goodList[index].product = body.product
        return {
            goodList,
            status: 200,
            msg: '修改成功'
        }
    }
    return {
        status: 400,
        msg: '修改失败'
    }
})


//category

//查询所有
// 使用 Mock.js 模拟 GET 请求  
Mock.mock('/mockapi/category', 'get', (options: any) => {
    // 从查询参数中提取 page_size 和 page_no  
    let body = JSON.parse(options.body)
    const { page_size, page_no } = body || {};

    // 根据查询参数处理数据（这里只是简单地返回所有数据）  
    // 在实际应用中，你可能需要根据 page_size 和 page_no 来分页数据  
    const total = categoryList.length;
    const list = categoryList.slice((page_no - 1) * page_size, page_no * page_size);

    // 返回模拟的数据  
    return {
        list,
        total,
    };
});

//增加数据接口：
Mock.mock('/mockapi/category', 'post', (options: any) => {
    let body = JSON.parse(options.body) // 获取请求参数
    let id = parseInt(body.id)
    let flag = true

    for (let item of categoryList) {
        if (item.id === id) flag = false // 判断id是否已经存在
    }

    // 如果id不存在
    if (flag) {
        categoryList.push(
            {
                product: body.product,
                id
            }
        )
        return {
            categoryList,
            status: 200,
            msg: '添加成功'
        }
    }
    // 如果id已存在
    return {
        status: 400,
        msg: '添加失败，id已存在'
    }
})

//删除数据接口
Mock.mock('/mockapi/remove', 'delete', (options: any) => {
    let id = parseInt(JSON.parse(options.body).id) // 获取请求id
    let index = null

    for (let i in categoryList) {
        if (categoryList[i].id === id) index = i // 获取id对应的index
    }

    if (index !== null) {
        console.log(`删除的id为：${id}，对应的index为：${index}`)
        categoryList.splice(index, 1) // 从index开始删除一个（本身）
        return {
            categoryList,
            status: 200,
            msg: '删除成功'
        }
    }
    return {
        status: 400,
        msg: '删除失败，id不存在'
    }
})

//修改数据接口
Mock.mock('/mockapi/edit', 'put', options => {
    const body = JSON.parse(options.body) // 解析请求参数（只能解析到这）
    const id = parseInt(body.id) // 获取请求id
    let index = null

    for (let i in categoryList) {
        if (categoryList[i].id === id) { // 判断id是否已经存在
            index = i // 拿到id对应的index
        }
    }

    // 如果id存在
    if (index != null) {
        categoryList[index].product = body.product
        return {
            categoryList,
            status: 200,
            msg: '修改成功'
        }
    }
    return {
        status: 400,
        msg: '修改失败'
    }
})


Mock.mock('/mockapi/menu', 'get', (options: any) => {
    return {
        list: menuList
    };
});

Mock.mock('/mockapi/tag', 'get', (options: any) => {
    return {
        list: tagList
    };
});

