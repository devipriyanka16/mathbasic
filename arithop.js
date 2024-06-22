function add()// function definition
{
    if(document.getElementById("v1").value=="")
        document.getElementById("result").innerText="Please enter first number";
    else if(document.getElementById("v2").value=="")
        document.getElementById("result").innerText="Please enter second number";
       else{ 
        var v1=document.getElementById("v1").value;
        var v2=document.getElementById("v2").value;
        var pattern=/\D/g;
        let result1 = v1.match(pattern);
        let result2 = v2.match(pattern);
        
        if(result1!=null)
            document.getElementById("result").innerText="enter first number only digits";        
        else if(result2!=null)
            document.getElementById("result").innerText="enter second number only digits";        
        else{
                var f=parseInt(document.getElementById("v1").value);
                var s=parseInt(document.getElementById("v2").value);
                c=f+s;
                document.getElementById("result").innerText="sum is"+c;
            }
    }
}
function sub()// function definition
{
    if(document.getElementById("v1").value=="")
        document.getElementById("result").innerText="Please enter first number";
    else if(document.getElementById("v2").value=="")
        document.getElementById("result").innerText="Please enter second number";
       else{ 
        var v1=document.getElementById("v1").value;
        var v2=document.getElementById("v2").value;
        var pattern=/\D/g;
        let result1 = v1.match(pattern);
        let result2 = v2.match(pattern);
        
        if(result1!=null)
            document.getElementById("result").innerText="enter first number only digits";        
        else if(result2!=null)
            document.getElementById("result").innerText="enter second number only digits";        
        else{
                var f=parseInt(document.getElementById("v1").value);
                var s=parseInt(document.getElementById("v2").value);
                c=f-s;
                document.getElementById("result").innerText="Product  is"+c;
            }
    }
}
function mul()// function definition
{
    if(document.getElementById("v1").value=="")
        document.getElementById("result").innerText="Please enter first number";
    else if(document.getElementById("v2").value=="")
        document.getElementById("result").innerText="Please enter second number";
       else{ 
        var v1=document.getElementById("v1").value;
        var v2=document.getElementById("v2").value;
        var pattern=/\D/g;
        let result1 = v1.match(pattern);
        let result2 = v2.match(pattern);
        
        if(result1!=null)
            document.getElementById("result").innerText="enter first number only digits";        
        else if(result2!=null)
            document.getElementById("result").innerText="enter second number only digits";        
        else{
                var f=parseInt(document.getElementById("v1").value);
                var s=parseInt(document.getElementById("v2").value);
                c=f*s;
                document.getElementById("result").innerText="Multiplication is"+c;
            }
    }
}