let start = function(){
    getClub();
    makeDOM();
    getId();
}

let getClub = function () {
    clubDic = {};
    $.ajax({
        url: 'clubList.json',
        type: 'GET',
        dataType: 'json'
    })
        .done(function (data) {
            // 部活のidと名前のjsonを連想配列に
            clubDic = data;
            // 部活のid
            keys = Object.keys(clubDic);
        })
        .fail(function (data) {
            alert('読み込みに失敗しました')
            console.log(data);
        });
}

let makeDOM = function () {
    let rowNum = 3;
    let currentRowNum = 1;

    $('#sheet').append(
        row = $('<tr>')
    );
    for (let i = 0; i < keys.length; i++) {
        if (currentRowNum > rowNum) {
            currentRowNum = 1;
            $('#sheet').append(
                row = $('<tr>')
            );
        }
        currentRowNum++;
        row.append($('<td>')
            .append($('<img>', {
                'src': 'img/none.png',
                'id': keys[i]
            })
            ));

    }
}

let getId = function () {
    if (location.search == '') {
        return;
    } else {
        // クエリからid部分を取得
        id = location.search.replace('?id=', '');
        // もうすでに取得済みなら何もしない
        if(localStorage.getItem(id)){
            return;
        }else{
            // localStorageに進捗を保存
            localStorage.setItem(id, clubDic[id]);
        }
    }
    $(`#${id}`).attr('src', 'img/stamp.png')
}

let checkProgress = function(){
    
}