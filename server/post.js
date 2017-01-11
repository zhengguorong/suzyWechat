var http = require("../utils/http.js")
var Promise = require('../libs/es6-promise.js').Promise

/**
 * 添加文章
 * post 文章对象
 */
function addPost({title, content, author, pic}) {
    return new Promise((resolve, reject) => {
        http.post('/api/article/wechat', { title: title, content: content, author: author, pic: pic }).then(data => {
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

/**
 * 添加评论
 */
function addComment({pId, author, content}) {
    return new Promise((resolve, reject) => {
        http.post('/api/reply', { pId: pId, author: author, content: content }).then(data => {
            resolve(data)
        })
    })
}

module.exports = {
    getPosts: getPosts,
    getPostById: getPostById,
    addPost: addPost,
    addComment: addComment
}