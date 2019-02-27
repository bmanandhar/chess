console.log("Sanitation");
$(document).ready(function(){
  let
    col='ABCDEFGH'.split('');
    row='12345678'.split('');
    
    men_white=['men/wR.png','men/wN.png','men/wB.png','men/wK.png','men/wQ.png','men/wB.png','men/wN.png','men/wR.png'];
    pond_white='men/wP.png';
    men_black=['men/bR.png','men/bN.png','men/bB.png','men/bK.png','men/bQ.png','men/bB.png','men/bN.png','men/bR.png'];
    pond_black='men/bP.png';

    for (let i=0; i<=7; i++){
      $('.white-row-one').append(`<img src="${pond_white}" style="width:35px; height:35px;">`);
      $('.black-row-one').append(`<img src="${pond_black}" style="width:35px; height:35px;">`);
    }

    for (let i=0; i<=7; i++){
      $('.white-row-two').append(`<img src="${men_white[i]}" style="width:35px; height:35px;">`);
      $('.black-row-two').append(`<img src="${men_black[i]}" style="width:35px; height:35px;">`);
    }
    for (let i=7; i>=0; i--){
      for (let j=0; j<=7; j++){
        if ((i+j)%2===0){
        $(`.row-${i+1}`).append(
          `<div class="black-square">
            <p class="${col[j]}${row[i]}">${col[j]}${row[i]}</p>
          </div>
      `)
      } else {
        $(`.row-${i+1}`).append(
          `<div class="white-square">
            <p class="${col[j]}${row[i]}">${col[j]}${row[i]}</p>
          </div>
      `)

      }
    }
  }

  // $('.start').click(function(){
  //   for (let i=0; i<=7; i++){
  //     $('.${col[i]}${i}').html(`<img src="">`)
  //   }
  // } 
});