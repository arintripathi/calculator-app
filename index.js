function val(result){
    form.disp.value = form.disp.value + result;
}

function calc(){
    if(form.disp.value == ""){
        alert("please enter the numbers")
    }
    else{
        form.disp.value = eval(form.disp.value);
    }
}

var btn = form.equal;
btn.addEventListener('dblclick', function(){
    form.disp.value = "";
});

