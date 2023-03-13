// Creating an empty array
let musiccard = [];


//   getting data from LS
let create_music = JSON.parse(localStorage.getItem("musicCard"))
//   console.log(create_music);

//   new array
for(let i = 0; i < create_music.length; i++){
    musiccard.push(create_music[i]);
    // console.log(musiccard);
  }


  // card
  let music_card;
  let left_div;
  let image;
  let song_name;
  let right_div;
  let audio_tag;
  let audio_source;
  let edit_btn;


  

  // Including for loop
  for (let i = 0; i < musiccard.length; i++) {
     


    music_card = document.createElement("div");
    music_card.setAttribute("class", "div-1");


    left_div = document.createElement("div");
    left_div.setAttribute("class", "left");
    music_card.append(left_div);

    image = document.createElement("img");
    image.setAttribute("class", "music-img");
    image.setAttribute("src", musiccard[i]["image"]);
    image.setAttribute("alt", musiccard[i]["alt"]);
    left_div.append(image);

    song_name = document.createElement("h2");
    song_name.innerText = musiccard[i]["name"];
    left_div.append(song_name);

    right_div = document.createElement("div");
    right_div.setAttribute("class", "right");
    music_card.append(right_div)

    audio_tag = document.createElement("audio");
    audio_tag.setAttribute("class", "music");
    audio_tag.setAttribute("controls", "")
    right_div.append(audio_tag);

    audio_source = document.createElement("source");
    audio_source.setAttribute("src", "../assets/audio/Ethir-Neechal.mp3")
    audio_source.setAttribute("type", "audio/mpeg")
    audio_tag.append(audio_source)

    edit_btn = document.createElement("a");
    edit_btn.setAttribute("href", "../pages/update_music.html?id=" + musiccard[i]["id"])
    edit_btn.setAttribute("class","btn-1")
    edit_btn.innerText = "Edit"
    right_div.append(edit_btn)

    document.querySelector(".sec-1.container").append(music_card);
  }
// set the array into LS
  localStorage.setItem("musicCard", JSON.stringify(musiccard))


