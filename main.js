let getClub = function(){
    clubDic = {};
    $.ajax({
        url: 'clubList.json',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data){
        clubDic = data;
        console.log(clubDic['0001'])
    })
    .fail(function(data){
        console.log(data);
    });
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