let getClub = function(){
    clubDic = {};
    $.ajax({
        url: 'clubList.json',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data){
        // 部活のidと名前のjsonを連想配列に
        clubDic = data;
        // 部活のid
        keys = Object.keys(clubDic);
    })
    .fail(function(data){
        alert('読み込みに失敗しました')
        console.log(data);
    });
}

let makeDOM = function(){
    let clubNum = keys.length;
    let rowNum = 3;
    let currentRowNum = 0;

    $('#sheet').append(
        row = $('<tr>')
    );
    for (let i = 0; i < clubNum; i++) {
        if(currentRowNum > rowNum){
            currentRowNum = 0;
            $('#sheet').append(
                row = $('<tr>')
            );
        }else{
            currentRowNum++;
            row.append($('<td>')
            .append($('<img>',{
                'src': 'img/none.png',
                'id': keys[i]
            })
            ));
        }
        currentRowNum ++;
    }
}

let getId = function (){
    let id;
    if(location.search == ''){
        return;
    }else{
        id = location.search.replace('?id=','');
    }
    $(`#${id}`).attr('src', 'img/stamp.png')
}