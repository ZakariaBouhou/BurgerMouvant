var game = {
    init: function(){
        // console.log(model);
        
        // model.forEach(element => {
        //     const square = document.createElement('div');
        //     square.className = 'square';
        //     game.tableau.append(square);
        //     console.log(element.length);
        //     //console.log(element);
        // });
       
    },
    cellWidth: 50,
    tableau: document.querySelector('.terrain_de_jeu'),
    types: {
        'x': 'classic',
        '*': 'wall',
        'o': 'burger',
        '-': 'goal'
    },
    
};


document.addEventListener('DOMContentLoaded', game.init);

var model = [
    'xxxxxxxxx**xx',
    'x********xx-x',
    'xxxxxxxx*x**x',
    'xx*****xxx*x*',
    'xxxxxx*x***x*',
    '****xx*x*xxx*',
    'xxx*xx*x*xxxx',
    'x*o*xx**xx*xx',
    'x***xxxxxx*xx',
    'xxxxxx*****xx',
];

//console.log(model);