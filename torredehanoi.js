const Tower = require('./model').Torre;

function setup(val){
  const t1 = new Tower();
  const t2 = new Tower();
  const t3 = new Tower();
  for(let i=val;i>0;i--){
    t1.push(i)
  };
  return {t1, t2, t3}
}

function makeMove( ppal , aux , final , altTorre ){ 
  if( altTorre == 1 ){
    ppal.move(final);
    return
  }
  makeMove( ppal , final , aux , altTorre-1 );
  ppal.move(final)
  makeMove( aux , ppal , final , altTorre-1 );
};

function printTowers(t1, t2, t3){
  console.log('Torre 1 :');
  t1.print();
  console.log('Torre 2 :');
  t2.print();
  console.log('Torre 3 :');
  t3.print();
};

function runHanoi(t1, t2, t3, val) {
  printTowers(t1,t2,t3);
  makeMove(t1,t2,t3,val);
  printTowers(t1,t2,t3);
}

const size = process.argv[2];

if (size) {
  const {t1,t2,t3} = setup(size);
  runHanoi(t1,t2,t3,size);
} else {
  console.log('argument is nedeed (tower size)');
}

