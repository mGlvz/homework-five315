function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");
    // console.log(hashTag + " " + pageID);
    if(pageID != ""){
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        // console.log("data" + data);
        $("#app").html(data);
    })
  }else{
    $.get(`pages/home/home.html`, function(data){
        // console.log("data" + data);
        $("#app").html(data);
    })
  }
} 

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListener(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });
}
var GAMES = [
    {gameTite: "Zelda",
    gameImage: "OcarinaOfTime.webp",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Donky Kong",
    gameImage: "donkyKong.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Street Fighter",
    gameImage: "streetFighter.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: M",
    },
    {gameTite: "Sonic",
    gameImage: "sonic.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Smash Bros",
    gameImage: "smashBros.webp",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Super Mario World",
    gameImage: "superMario.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Pac-Man",
    gameImage: "PacMan.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Frogger",
    gameImage: "frogger.png",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: E",
    },
    {gameTite: "Doom",
    gameImage: "doom.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: M",
    },
    {gameTite: "Mortal Kombat",
    gameImage: "mortalKombat.webp",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "Rating: M",
    }
];

function loadData(){
    $.each(GAMES,function(index, game){
        $("#app").append(`
    <div id="${index}" class="browseContainer">
        <div class="browseImage">
            <img src="images/${game.gameImage}" alt="${game.gameTite}" />
        </div>
        <div class="browseContentContainer">
            <div class="title">${game.gameTite}</div>
            <div class="browseContent">
                ${game.gameDescription}
            </div>
            <div class="rating">${game.gameRating}</div>
        </div>
  </div>`);
    });
    // for (let i = 0; i < GAMES.length; i++){
    //     console.log(GAMES[i].gameTite);
    // }
}

function initListeners(){}

$(document).ready(function(){
    // initURLListener();
    initListener();
    loadData();
});