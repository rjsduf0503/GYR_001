let sel = document.querySelector('#selectAll');

document.getElementById('add').addEventListener('click', addList);
document.getElementById('delete').addEventListener('click', deleteList);
document.getElementById('modify').addEventListener('click', modifyList);
document.getElementById('selectAll').addEventListener('click', selectAll);
document.getElementById('text').addEventListener('keydown', function(event){
    if(event.keyCode===13) addList();
})

//전체 선택
function selectAll(){
    var ob = document.querySelectorAll('#listBody .btn-chk');
    for(var i in ob){
        if(this.checked) ob[i].checked = true;
        else ob[i].checked = false;
    }
}

function selection(event){
    var ob = document.querySelectorAll('#listBody .btn-chk');
    if(!event.target.checked){
        if(sel.checked) sel.checked = false;
    } 
    else{
        var flag = 0;
        for(var i=0; i<ob.length; i++){
            if(ob[i].checked) flag++;
            else break;
        }
        if(flag == ob.length) sel.checked = true;
    }
}

function addList(){ //등록
    var contents = document.querySelector('.txt');

    if(!contents.value){
        alert('Write Contents Please');
        contents.focus();
        return false;
    }

    var tr=document.createElement('tr');
    var input=document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');
    input.addEventListener('click', selection);

    var td1 = document.createElement('td');
    td1.appendChild(input);
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = contents.value;
    tr.appendChild(td2);

    document.getElementById('listBody').appendChild(tr);
    contents.value='';
    contents.focus();
}


function modifyList(){ //수정
    var contents = document.querySelector('.txt');

    var ob = document.querySelectorAll('#listBody .btn-chk');
    var chkCount = 0;
    for(var i in ob){
        if(ob[i].checked && ob[i].nodeType == 1) chkCount++;
        if(chkCount>1){
            alert('Please Select One At A Time')
            return false;
        }
    }

    if(!contents.value){
        alert('Write Contents Please');
        contents.focus();
        return false;
    }

    for(var i in ob){
        if(ob[i].checked && ob[i].nodeType == 1){
            ob[i].parentNode.nextSibling.innerHTML = contents.value;
            ob[i].checked =  false;
        }
    }
    contents.value='';
}


function deleteList(){ //삭제
    var body = document.getElementById('listBody');
    var checkBox = document.querySelectorAll('#listBody .btn-chk');
    //요소 모두 선택
    for(var i in checkBox){
        if(checkBox[i].nodeType == 1 && checkBox[i].checked == true){
            //elementNode이면서 checked면
            body.removeChild(checkBox[i].parentNode.parentNode);
            sel.checked = false;
        }
    } 
}