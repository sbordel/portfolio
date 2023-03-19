function egg(eggid){

    var eggid;
    let eggTitle;

    var eggArray = [];
    for (i = 0; i < 11; i++) {
      eggArray[i] = new Image();
      eggArray[i].src = 'assets/egg' + eggid + '.gif';
    }

    document.getElementById(eggid).src = 'assets/egg' + eggid + '.gif';
    eggImg = document.getElementById(eggid);
    eggTitle = document.getElementById(eggid).title;
    document.getElementById('code').innerHTML =  eggTitle;
    
    window.setTimeout(function(){
      document.getElementById(eggid).src = 'assets/egg' + eggid + '.png';
      }, 5000);
    }
    
     function change() {
        var elem = document.getElementById("btn-a");
        var list = document.getElementById("breakfast-a")
        if (elem.value=="▾") elem.value = "▸", list.style.display = 'none';
        else elem.value = "▾", list.style.display = 'inline';
    }
