function Torre(){
  this.head = null;
  this.high = 0;
}

Torre.prototype.push = function(data){
  var newDisc = new Disc(data)
  if(this.head == null) {
    this.head = newDisc;
  }else{
    newDisc.under = this.head;
    this.head = newDisc;
  }
  this.high++;
}

Torre.prototype.pop = function(){
  if(this.head == null){
    return null
  }
  var popDisc = this.head;
  this.head = popDisc.under;
  this.high--;
  popDisc.under = null;
  return popDisc;
}

Torre.prototype.move = function(pila){
  if(pila.head == null || this.head.size < pila.head.size){
    pila.push(this.pop().size);
  }else if(this.head.size > pila.head.size){
    return console.log('Disco mas grande que la base pretendida');
  }else{
    return console.log('Torre vacia');
  } 
}

Torre.prototype.print = function(){
  if ( this.head == null ) return console.log('Torre vacia');
  var pointer = this.head;
  while( pointer != null ){
    console.log( pointer.size );
    pointer = pointer.under;
  }
}

function Disc(data) {
  this.size = data;
  this.under = null;
}

module.exports = { Torre };