$.ajax({
    method: 'GET',
    // url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
    url: 'http://192.168.31.127:8080/movie/list',
    success: function (data) {
        console.log('成功');
        console.log(JSON.parse(data));
        let list = '';
        JSON.parse(data).movieList.forEach(item => {
            list += `<li class="item">
            <div class="left">
                <img src="${item.img}" />
            </div>
            <div class="right"s>${item.nm}</div>
        </li>`
        });
        document.getElementById('list').innerHTML = list;
    },
    fail: function (error) {
        console.log('失败');
        console.log(error);
    }
})