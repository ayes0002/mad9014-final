$(document).ready(function(){
    var dummy;
    var i=0;
    var arr=[];
    var ch=[];
    var d=0;
    var del;
    var grocery_ayes0002= "grocery_ayes0002";
    var arrayinit=0;
    loadpage();
    
    function loadpage(){
//        if(localStorage && localStorage.getItem(grocery_ayes0002,JSON.stringify(arr))!==undefined) {
//            localStorage.setItem(grocery_ayes0002,JSON.stringify(arr));
//        }
        if(localStorage.length===0){
        }else{
            arr = JSON.parse(localStorage.getItem(grocery_ayes0002,JSON.stringify(arr)));
            arrayinit=arr.length;
            
            for(var c=0; 0<arr.length; c++){
                if(arr[c]!==undefined){
                    if(arr[c]!==null){
                        var grocery = document.createElement("div");
                        grocery.id= "grocery" + c;
                        $("#list").append(grocery);
                        var checkbox = document.createElement('input');
                        checkbox.type = "checkbox";
                        checkbox.name = "check";
                        checkbox.id = "check " + c;
                        checkbox.className="checkbox";
                        del = document.createElement("input");
                        del.type="submit";
                        del.name= "Delete";
                        del.className="remove";
                        del.id="rem"+c;
                        del.value="Delete";
                        $("#grocery" + c).append(checkbox);
                        $("#grocery" + c).append("<p>");
                        $("#grocery" + c).append(del);
                        $("#grocery" + c).append("<br>");
                        $("p:last").text(arr[c]);
                        $(del).on("click",de);
                        $(checkbox).on("click",chf);
                        i++;
//                        if($(".checkbox").is(":checked")){
//                            $(".checkbox").trigger("click");
//                        }
                    }
                } else {
                    break;
                }
            }
        }
    }
    $(".submit").on("click",function(){
        dummy=document.querySelector(".item").value;
        if(dummy!==""){
            var grocery = document.createElement("div");
            grocery.id= "grocery" + i;
            grocery.className= dummy;
            $("#list").append(grocery);
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "check";
            checkbox.id = "check " + i;
            checkbox.className = "checkbox";
            del = document.createElement("input");
            del.type="submit";
            del.name= "Delete";
            del.className="remove";
            del.id="rem"+i;
            del.value="Delete";
            $("#grocery" + i).append(checkbox);
            $("#grocery" + i).append("<p>");
            $("#grocery" + i).append(del);
            $("#grocery" + i).append("<br>");
            $(del).on("click",de);
            $(checkbox).on("click",chf);
            arr[i]=dummy;
            i++;
            $("p:last").text(dummy);
            document.querySelector(".item").value="";
            localStorage.setItem(grocery_ayes0002,JSON.stringify(arr));
            clear();
            loadpage();
        }
    });
    
    function chf(){
        for(var j=0; j<arrayinit; j++){
            ch[j]=$(".checkbox").get(j).checked;
//            $(p).style("font-decoration","line-through");
//            var list = [arr, ch];
//            localStorage.setItem(grocery_ayes0002,JSON.stringify(arr));
//                clear();
//                loadpage();
//                $(".rem"+j).style("display","block");
//                this.style("font-decoration","line-through");
        }
    }
    
    $(".clear").on("click", function(){
        clear();
        localStorage.clear();
        arr=[];
});
    
                   
    function clear(){
        i=0;
        $("#list").empty();
    }
    
    function de(){
        var a = this.id;
        for(var j=0; j<arrayinit; j++){
                if('rem' + j == a){
                        $("#grocery" + j).remove();
                        arr.splice(j,1);
            }
        }
        localStorage.setItem(grocery_ayes0002,JSON.stringify(arr));
        clear();
        loadpage();
    }
});