// 正在热映的电影
$.ajax({
    url: '/ajax/movieOnInfoList?token=',
    method: 'GET',
    success: function(data){
        console.log('请求成功：正在热映的电影');
        console.log(data);
    },
    fail: function(error){
        console.log('请求失败：正在热映的电影');
        console.log(error);
    }
})
 
// 最受期待的电影
$.ajax({
    url: '/ajax/mostExpected?ci=30&limit=10&offset=0&token=',
    method: 'GET',
    success: function(data){
        console.log('请求成功：最受期待的电影');
        console.log(data);
    },
    fail: function(error){
        console.log('请求失败：最受期待的电影');
        console.log(error);
    }
})
 
 
// 即将上映的电影
$.ajax({
    url: '/ajax/comingList?ci=30&token=&limit=10',
    method: 'GET',
    success: function(data){
        console.log('请求成功：即将上映的电影');
        console.log(data);
    },
    fail: function(error){
        console.log('请求失败：即将上映的电影');
        console.log(error);
    }
})