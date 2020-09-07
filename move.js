
document.onkeydown = checkKey;

function checkKey(e) {

    var speed = 50,
        direction = 1,
        ghost = document.getElementById('ghost');
    var ghostLeftPos = ghost.offsetLeft - 30,
        ghostUpPos = ghost.offsetTop - 50;

    e = e || window.event;

    if (e.keyCode == '37') {
        moveLeft((ghostLeftPos - speed * direction));
    }else if (e.keyCode == '39') {
        var rightPos = moveRightORmoveDown((ghostLeftPos + speed * direction),(document.documentElement.clientWidth-210));
        ghost.style.left = rightPos + 'px';
    }else if (e.keyCode == '38') {
        moveUp((ghostUpPos - speed * direction),speed);
    }else if (e.keyCode == '40') {
        var downPos = moveRightORmoveDown((ghostUpPos + speed * direction),(document.documentElement.clientHeight - 200));
        ghost.style.left = downPos + 'px';
    }

}

function moveLeft(current_position){
    // Recalculate position:
    if( current_position <= 0){
        ghost.style.left = 0 + 'px';
    }else{
        ghost.style.left = current_position + 'px';
    }
    
}

function moveRightORmoveDown(current_position,condition){    
    // Recalculate position:
    if( current_position > condition){
        return condition;
    }else{
        return current_position;
    }
    
}

function moveUp(current_position,speed){
    // Recalculate position:
    if(current_position <= speed){
        ghost.style.top = 0 + 'px';
    }else{
        ghost.style.top = current_position + 'px';
    }
}

function moveDown(current_position,condition){
    // Recalculate position:
    if(current_position > condition){
        ghost.style.top = condition + 'px';
    }else{
        ghost.style.top = current_position + 'px';
    }
    
}

