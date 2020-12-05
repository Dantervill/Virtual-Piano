document.addEventListener("keydown", function(event) {
    let audio = document.createElement("AUDIO");
    if (event.code == "KeyA") {
        audio.src = "/sounds/A.mp3";
        audio.play();
    } else if(event.code == "KeyW"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    }else if(event.code == "KeyS"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    }else if(event.code == "KeyE"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    } else if(event.code == "KeyD"){
        audio.src = "/sounds/D.mp3";
        audio.play();
    } else if(event.code == "KeyF"){
        audio.src = "/sounds/F.mp3";
        audio.play();
    } else if(event.code == "KeyT"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    }else if(event.code == "KeyG"){
        audio.src = "/sounds/G.mp3";
        audio.play();
    } else if(event.code == "KeyY"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    }else if(event.code == "KeyH"){
        audio.src = "/sounds/H.mp3";
        audio.play();
    } else if(event.code == "KeyU"){
        audio.src = "/sounds/S.mp3";
        audio.play();
    }else if(event.code == "KeyJ"){
        audio.src = "/sounds/J.mp3";
        audio.play();
    } else {
        console.log("Another keys is pressed");
    }
});