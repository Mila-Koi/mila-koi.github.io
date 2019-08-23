class Tile{
<<<<<<< HEAD
  constructor(letter, x, y, width){
    this.width = width;
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
    text(this.letter, this.x + this.width / 4, this.y + this.width / 1.25);
=======
  constructor(letter){
    this.width = 40;
    this.letter = letter;
  }

  drawTile(x, y){
    fill(255, 0, 0);
    square(x, y, this.width);
    fill(255, 255, 255);
    textSize(this.width / 1.25);
    text(this.letter, x + this.width / 4, y + this.width / 1.25);
>>>>>>> b7e22c9 (mew)
  }
}
