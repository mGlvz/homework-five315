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
    gameImage: "crash.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Donky Kong",
    gameImage: "donkyKong.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Street Fighter",
    gameImage: "streetFighter.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Sonic",
    gameImage: "sonic.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Smash Bros",
    gameImage: "smashBros.webp",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Super Mario World",
    gameImage: "superMario.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Pac-Man",
    gameImage: "PacMan.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Frogger",
    gameImage: "frogger.png",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Doom",
    gameImage: "doom.jpeg",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    },
    {gameTite: "Mortal Kombat",
    gameImage: "mortalKombat.webp",
    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ante.",
    gameDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel.",
    gameRating: "E",
    }
];

function loadData(){
    $.each(GAMES,function(index, game){
        console.log(game.gameTite)

    })
}

function initListeners(){}

$(document).ready(function(){
    initURLListener();
    initListener();
    loadData();
});