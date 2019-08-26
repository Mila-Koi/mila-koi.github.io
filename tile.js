class Tile{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(letter, x, y, width){
=======
  constructor(letter, points, x, y, width){
>>>>>>> dbc9b40 (mew)
    this.width = width;
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.onBoard = false;
    this.committedToBoard = false;
    this.boardX = -1;
    this.boardY = -1;
    this.points = points;
  }

  drawTile(){
    let unplayedColor = color(214, 195, 152);
    let unplayedBlankColor = color(232, 216, 179);
    let playedColor = color(158, 128, 57);
    let playedBlankColor = color(184, 155, 86);

    if(this.committedToBoard){
      if(this.points == 0){
        fill(playedBlankColor);
      }
      else{
        fill(playedColor);
      }
    }
    else{
      if(this.points == 0){
        fill(unplayedBlankColor);
      }
      else{
        fill(unplayedColor);
      }
    }
    stroke(0, 0, 0);
    strokeWeight(2)
    square(this.x, this.y, this.width);
<<<<<<< HEAD
    fill(255, 255, 255);
<<<<<<< HEAD
    textSize(this.width / 1.25);
<<<<<<< HEAD
    text(this.letter, this.x + this.width / 4, this.y + this.width / 1.25);
=======
  constructor(letter){
=======
  constructor(letter, x, y){
>>>>>>> 36a4067 (mew)
    this.width = 40;
=======
  constructor(letter, x, y, width){
    this.width = width;
>>>>>>> 7d06e29 (mew)
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.onBoard = false;
    this.committedToBoard = false;
    this.boardX = -1;
    this.boardY = -1;
  }

  drawTile(){
    if(this.committedToBoard){
      fill(0, 0, 255);
    }
    else{
      fill(255, 0, 0);
    }
    square(this.x, this.y, this.width);
    fill(255, 255, 255);
    textSize(this.width / 1.25);
<<<<<<< HEAD
    text(this.letter, x + this.width / 4, y + this.width / 1.25);
>>>>>>> b7e22c9 (mew)
=======
    text(this.letter, this.x + this.width / 4, this.y + this.width / 1.25);
>>>>>>> 36a4067 (mew)
=======
    let letterWidth = textWidth(this.letter);
    let textBeginHorizontal = ((this.width - letterWidth) / 2);
    text(this.letter, this.x + textBeginHorizontal, this.y + this.width / 1.25);
    textSize(this.width / 4.5);
    text(this.points, this.x + this.width - 2 - textWidth(this.points.toString()), this.y + this.width - 4);
>>>>>>> dbc9b40 (mew)
=======
=======

    fill(0, 0, 0);
>>>>>>> 4214f73 (mew)
    noStroke();
    if(this.letter != "BL"){
      textSize(this.width / 1.25);
      let letterWidth = textWidth(this.letter);
      let textBeginHorizontal = ((this.width - letterWidth) / 2);
      text(this.letter, this.x + textBeginHorizontal, this.y + this.width / 1.25);
    }
    if(this.points != 0){
      textSize(this.width / 4.5);
      text(this.points, this.x + this.width - 2 - textWidth(this.points.toString()), this.y + this.width - 4);
    }
>>>>>>> f3ea819 (mew)
  }
}
