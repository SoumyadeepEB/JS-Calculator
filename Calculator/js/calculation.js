function calc(i) 
    { 
        document.getElementById("select").value+=i; 
    } 
    
    function sol() 
    { 
        var x=document.getElementById("select").value; 
        var y=eval(x); 
        document.getElementById("select").value=y; 
    } 
    
    function clr() 
    { 
        document.getElementById("select").value="";
    } 

    function back()
    {
        var z = document.getElementById("select").value;
        document.getElementById("select").value=z.substr(0, z.length-1);
    }

    function mode()
    {
        var x=document.getElementById("b");
        if (x.value=="SCI")
        {
            x.value="GEN";
            s.style.display="none";
            h.style.display="inherit";
        }
        else
        {
            x.value="SCI";
            s.style.display="inherit";
            h.style.display="none";
        }
    } 