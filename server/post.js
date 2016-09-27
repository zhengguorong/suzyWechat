var mock = require("./mock.js");

/**
 * 获取文章列表
 * page 页码
 * count 获取数量
 * cb 成功回调
 */
function getPosts(page,count,cb) {
    if(cb){
        cb(mock.posts);
    }
}

function getPostById(id,cb){
    if(cb){
        mock.posts.forEach(function(post){
            if(post.article._id==id){
                cb(post)
            }
        })
    }
}

module.exports = {
  getPosts: getPosts,
  getPostById:getPostById
}