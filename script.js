function calculer()
{
  
    document.getElementById("lblErreur").innerHTML="<span style='color:black;'></span>"
   
    var res
    var n1=eval(document.getElementById("txt1").value)
    var n2=eval(document.getElementById("txt2").value)
    var p=document.getElementById('lstOp').selectedIndex;
   // var op=document.getElementById('lstOp').options[p].innerText
   switch(p)
   {
    case 1: 
        res=n1+n2;break;
    case 2 :
        res=n1-n2;break;
    case 3 :
        res=n1/n2;break;
    case 4 :
        res=n1-n2;break;
    default:
        document.getElementById("lblErreur").innerHTML="<span style='color:red;'>Erreur. Veuillez chosir une opération </span>"
        return
   }
   /*
   if(p==1)
    {
        res=n1+n2

    }
    else if (p==2)
    {
        res=n1-n2
    }
    else if (p==3)
    {
        res=n1/n2
    }
    else if (p==4)
    {
        res=n1*n2
    }
    else
    {
        //erreur
        document.getElementById("lblErreur").innerHTML="<span style='color:red;'>Erreur. Veuillez chosir une opération </span>"
        return
    }
  */
    document.getElementById("txtAffiche").value=res
}
function afficher1()
{
    document.getElementById("lblErreur").innerText="bonjour"
    document.getElementById("titre1").innerText="Calculette après click"
    

}
function afficher2()
{
    document.getElementById("lblErreur").innerText="[lblErreur]"
    document.getElementById("titre1").innerText="Calculette"
    

}