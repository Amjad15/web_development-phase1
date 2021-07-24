function savepost (){

    var title=document.getElementById('title').value;
    var today = new Date();
    
    var day=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    localStorage.setItem("name",document.getElementById('Name').value);
    localStorage.setItem("title",title);
    localStorage.setItem("day",day);
    localStorage.setItem("IsPosted",1);


}

function getlast (){

   
    
    if ( localStorage.getItem("name") ){
        document.getElementById('lastName').innerText=localStorage.getItem("name");
        document.getElementById('lastPost').innerText=localStorage.getItem("title");
        document.getElementById('lastDay').innerText=localStorage.getItem("day");
    }
    if(localStorage.getItem("IsPosted") !=0){

        document.getElementById('success').style.display="block";
        localStorage.setItem("IsPosted",0);
    }


}
