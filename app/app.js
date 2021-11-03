// ===an array is plural===//
var GAMES = [
    {
        // THUMB ONE
gameTitle: "Mario and Luigi Partners in Time",
gameThumbImg: "thumb1_300x300.jpg",
gameBriefDescription:
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
gameRating: "E10+",
},
{
    // THUMB TWO
    gameTitle: "Animal Crossing New Horizons",
    gameThumbImg: "thumb2_300x300.jpg",
    gameBriefDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
    gameRating: "E10+",
    },
    {
        // THUMB THREE
        gameTitle: "Luig's Mansion Dark Moon",
        gameThumbImg: "thumb3_300x300.jpg",
        gameBriefDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
        gameRating: "E10+",
        },
        {
            // THUMB FOUR
            gameTitle: "Luigi's Mansion 3",
            gameThumbImg: "thumb4_300x300.jpg",
            gameBriefDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
            gameRating: "E10+",
            },
            {
                // THUMB FIVE
                gameTitle: "Super Mario Odessey",
                gameThumbImg: "thumb5_300x300.jpg",
                gameBriefDescription:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                gameRating: "E10+",
                },
                {
                    // THUMB SIX
                    gameTitle: "Mario + Rabbids Kingdom Battle",
                    gameThumbImg: "thumb6_300x300.jpg",
                    gameBriefDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                    gameRating: "E10+",
                    },
                    {
                        // THUMB SEVEN
                        gameTitle: "Mario and Luigi Dream Team",
                        gameThumbImg: "thumb7_300x300.jpg",
                        gameBriefDescription:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                        gameRating: "E10+",
                        },
                        {
                            // THUMB EIGHT
                            gameTitle: "Paper Mario The Origami King",
                            gameThumbImg: "thumb8_300x300.jpg",
                            gameBriefDescription:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                            gameRating: "E10+",
                            },
                            {
                                // THUMB NINE
                                gameTitle: "Super Mario Bros. 3",
                                gameThumbImg: "thumb9_300x300.jpg",
                                gameBriefDescription:
                                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                                gameRating: "E10+",
                                },
                                {
                                    // THUMB TEN
                                    gameTitle: "The Legend of Zelda Breath of the Wild",
                                    gameThumbImg: "thumb10_300x300.jpg",
                                    gameBriefDescription:
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quidem quam exercitationem quia impedit inventore hic et debitis animi cumque similique, quo ad eaque! ",
                                    gameRating: "E10+",
                                    },

];

function loadData(){
$.each(GAMES, function(index, game){
$("#app").append(`<div id="${index}" class="game-holder">
<h4>${game.gameTitle}</h4>
<div class="game-image">
    <img src="images/game-thumbs/${game.gameThumbImg}" alt="${game.gameTitle}">
</div>
<div class="brief-rating">
<div class="brief-des">
 ${game.gameBriefDescription}
</div>
<div class="rating">Rating: ${game.gameRating}</div>
</div>
</div>`);
});
}

function initListeners() {}

$(document).ready(function (){
    loadData();

// want buttons to work after data is loaded
// call initListeners after loadData function
    // initListeners();
});