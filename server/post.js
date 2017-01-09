var http = require("../utils/http.js")
var Promise = require('../libs/es6-promise.js').Promise

function addPost(post) {
    return new Promise((resolve, reject) => {
        http.post('/api/article/wechat', post).then(data => {
            resolve(data)
        })
    })
}

/**
 * 获取文章列表
 * page 页码
 * count 获取数量
 */
function getPosts(page, count) {
    return new Promise((resolve, reject) => {
        http.get('/api/article', { page: page, count: count }).then(data => {
            resolve(data)
        })
    })
}

/**
 * 获取指定id文章
 */
function getPostById(id) {
    return new Promise((resolve, reject) => {
        http.get('/api/article/detail/' + id).then(data => {
            resolve(data)
        })
    })
}

module.exports = {
    getPosts: getPosts,
    getPostById: getPostById,
    addPost: addPost
}