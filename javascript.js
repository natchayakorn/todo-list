'use strict'
$(document).ready(function(){
    console.log($(window))

    var $input = $('.task-input')
    var $content = $('.content')
    var $btn = $('.btn-add')
    var $delete = $('.delete')
    var $archive = $('.archive')
    var $checkbox = $('.check')
    $archive.click(function(){
        var check = document.getElementsByClassName('check')
        var text = document.getElementsByClassName('task')
        for(var i=0;i<check.length;i++)
        {   
            var chk = check[i];
            var txt = text[i];
            if (chk.checked){
                chk.parentNode.remove(); 
                i--;
            }
        }
    })
    $content.on('click','.delete',function(){
        //console.log($(this),$(this).parent())
        $(this).parent().remove()
    })

    $btn.click(function(){
        
        console.log($input.val())
        var temp = '<li><input type= "checkbox" class="check">' + $input.val() + '<span class="delete"> (x)</span>' + '</li>'
        $content.append(temp)
        console.log($content,temp)
    })
   /* $input.change(function(){
        console.log($(this).val())
    }).keyup(function(){
        console.log($(this).val())
    }).keydown(function(){
        console.log($(this).val())
    })*/
})