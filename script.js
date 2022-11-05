const list=['img/def.jpg','img/saitoverstauzen.jpg', 'img/two.jpg', 'img/wizard.jpg', 'img/zagadki-pro-bukvu-b.jpg'];
let count=+0;
document.querySelector('img').addEventListener('click',()=>{
  count++;
  for(let oj=0;oj<list.length;oj++){
  }
  if(count==4){
    count=0;
    document.querySelector('img').setAttribute('src', 'images.jpeg')
  }else{
    document.querySelector('img').setAttribute('src', list[count]);
  }
});
