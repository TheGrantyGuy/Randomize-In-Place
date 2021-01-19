var sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var randArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var sortedColors = ["#f00","#f10", "#f20", "#f30", "#f40", "#f50", "#f60", "#f70", "#f80", "#f90", 
"#fa0", "#fb0", "#fc0", "#fd0", "#fe0", "#ff0"];
var startingColors = ["#fff", "#eee", "#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888",
"#777", "#888", "#999", "#aaa", "#bbb", "#ccc", "#ddd", "#eee"];

var selectedColor = "#00f";
var currentColor = "#0f0";
var backLight = "#fb6";
var white = "#fff";
var n = sortedArray.length;

var step = 0;
var place = 0;
var random;

function randomNum(min, max){
    return Math.floor(Math.random() * ((max - 1) - min + 1) + min);
}

function setArray(){
    for (i = 0; i < n; i++){
        document.getElementById(i).innerText = sortedArray[i];
        document.getElementById("a"+i).style.background = startingColors[i];
    }
    step = 0
    place = 0;
    resetBackground("b5", "b4", "b3", "b2");
    resetBackground("b5", "b4", "b3", "b1");
}

function implemented(){
    for (i = 0; i < n; i++){
        var num = randomNum(i, n-1);
        var save = randArray[i];
        randArray[i] = randArray[num];
        randArray[num] = save;
    }

    for (i = 0; i < n; i++){
        document.getElementById(i).innerText = randArray[i];
    }
}

function setColor(num, color){
    document.getElementById("a"+num).style.background = color;
}

function setNums(pos, num){
    document.getElementById(pos).innerText = num;
}

function setBackground(num){
    document.getElementById(num).style.background = backLight;
}

function resetBackground(back1, back2, back3, back4){
    document.getElementById(back1).style.background = white;
    document.getElementById(back2).style.background = white;
    document.getElementById(back3).style.background = white;
    document.getElementById(back4).style.background = white;
}

function algorithm(){
    switch(step){
    case 0:
        if (place > 15){
            resetBackground("b5", "b4", "b3", "b2");
            break;
        }
        else if (place == 0){
           setBackground("b1");
           setColor(place, currentColor);
           step = 1;
           break;
        }

        else{
            resetBackground("b1", "b3", "b4", "b5");
            setBackground("b2");
            setColor(place, currentColor);
            step = 1;
            break;
        }

    case 1: 
       
        random = randomNum(place, n);
        if (random == place){
           
            resetBackground("b1", "b2", "b3", "b4");
            setColor(random, selectedColor);
            setBackground("b5");
        
            step = 3;
            break;
        }
        
        resetBackground("b1", "b2", "b3", "b4");
        setColor(random, selectedColor);
        setBackground("b5");
        step = 2;
        break;
    case 2: 
       resetBackground("b5", "b3", "b1", "b4");
       var save = document.getElementById(place).innerText;
       var rand = document.getElementById(random).innerText;

       setNums(place, rand);
       setNums(random, save);
       setColor(place, sortedColors[place]);
       setColor(random, startingColors[random]);
       setBackground("b3");
       setBackground("b4");
       setBackground("b5");

       place++;
       step = 0;
       break;
    case 3: 
        setColor(place, sortedColors[place]);
        setBackground("b3");
        setBackground("b4");
        setBackground("b5");
        place++;
        step = 0;
        break;
    }
}








