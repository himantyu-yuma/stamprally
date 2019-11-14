let getClub = function(){
    clubDic = {};
    $.ajax({
        url: 'clubList.json',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data){
        clubDic = data;
    })
    .fail(function(data){
        alert('読み込みに失敗しました')
        console.log(data);
    });
}

let makeDOM = function(){
    let clubNum = Object.keys(clubDic).length;
    let rowNum = 3;
    let currentRowNum = 0;

    $('.sheet').append(
        row = $('<tr>')
    );
    for (let i = 0; i < clubNum; i++) {
        if(currentRowNum > rowNum){
            currentRowNum = 0;
            $('.sheet').append(
                row = $('<tr>')
            );
        }else{
            currentRowNum++;
            row.append($('<td>').attr('src', 'img/none.png'));
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