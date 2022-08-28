const blue = ['hard', 'hard', 'easy', 'easy', 'easy', 'hard', 'normal', 'hard', 'normal', 'easy', 'normal', 'normal'];
const brown = ['normal', 'normal', 'normal', 'normal', 'normal', 'hard', 'hard', 'hard', 'hard', 'hard', 'easy', 'easy', 'easy', 'easy', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy'];
const green = ['easy', 'hard', 'hard', 'hard', 'hard', 'hard', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy', 'normal', 'normal', 'normal', 'easy', 'easy', 'easy'];
let cardSetBlue = [];
let cardSetGreen = [];
let cardSetBrown = [];
let countStage = [];
let colors = ['green','brown','blue'];
let stageSet = [[],[],[]];
let stage = [];
let count = 0;
let randomSum = 1;
let currentStage = 1;
let modeName;

function random() {
  data = new Date();
  randomSum += (Number(data.getMinutes()) + Number(data.getSeconds()));
  let sin = Math.abs(Math.sin(randomSum));
  let a = sin * 1000 - Math.trunc(sin * 1000);
  randomSum += a;
  // console.log(a)
  return a;
}

const difficulties = [
    {
      id: 'easest',
      name: 'Очень Низкая'
    },
    {
        id: 'easy',
        name: 'Низкая'
      },
    {
      id: 'normal',
      name: 'Средняя'
    },
    {
      id: 'hard',
      name: 'Высокая'
    },
    {
        id: 'hardest',
        name: 'Очень Высокая'
      },
  ]

  let difName = ['Легкая', 'Нормальная', 'Сложная']
  let ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      count: 16,
      cardFace: 'assets/Ancients/Azathoth.jpg',
      stage:[],
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      count: 15,
      cardFace: 'assets/Ancients/Cthulthu.jpg',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      count: 16,
      cardFace: 'assets/Ancients/iogSothoth.jpg',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      count: 16,
      cardFace: 'assets/Ancients/shubNiggurath.jpg',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]
  const greenNumber = 18;
  const blueNumber = 12;
  const brownNumber = 21;
  let hero;
  let ancientId = 'azathoth';
  let mode = 'easest';
  
  function selectAncients(e) {
    let target = e.target;
    if (target.id == 'ancients') return;
    // hidden();
      let selectId = target.id;
      if (selectId != hero.id) {
        hero.classList.remove('ancientBorder');
        target.classList.add('ancientBorder');
        hero = target;
        ancientId = hero.id
        document.getElementById('text1').textContent = ancientId;
      }
    } 
    function selectMode(e) {
        let target = e.target;
        if (target.id == 'buttonsMode') return;
        // hidden();
        mode = target.id;
        modeName = difficulties.find(a => a.id === mode).name;
        // alert(modeName);
        document.getElementById('text2').textContent = modeName;
        } 


    function createCardObject()   {
      cardSetBlue = [];
      cardSetGreen = [];
      cardSetBrown = [];
      stageSet = [[],[],[]];
      currentStage = 0;

      for (let i = 0; i < blue.length; i++) {
        let anyCard = {};
        anyCard.color = 'blue';
        anyCard.range = blue[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/blue/blue${i+1}.jpg`;
        anyCard.random = Math.random();
        cardSetBlue.push(anyCard);
      }  
      for (let i = 0; i < green.length; i++) {
        let anyCard = {};
        anyCard.stage = 0;
        anyCard.color = 'green';
        anyCard.range = green[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/green/green${i+1}.jpg`;
        anyCard.random = Math.random();
        cardSetGreen.push(anyCard);
      }  
      for (let i = 0; i < brown.length; i++) {
        let anyCard = {};
        anyCard.color = 'brown';
        anyCard.range = brown[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/brown/brown${i+1}.jpg`;
        anyCard.random = Math.random();
        cardSetBrown.push(anyCard);
      }  
      // cardSet.sort((a,b) => a.random - b.random);
      // console.log(cardSet);
      // это мы собрали все карты в одну кучу, указав для каждой адрес картинки и ключ, по которому будем случайно выбирать карту
      // тут надо убрать (не добавлять) легкие или сложные карты для двух режимов. завтра

    }
    function createColorDeck() {
      let blueNum = 2;
      let greenNum = 5;
      let brownNum = 9;
      let cardSet = [];
      if (ancientId == 'cthulhu') {greenNum = 4};
      if (ancientId == 'shubNiggurath') {greenNum = 6; brownNum = 8};
      // console.log(blueNum,greenNum,BrownNum);
      switch(mode) {
        case 'easest': {
          cardSet = cardSetBlue.filter(function(a) {return a.range == 'easy'});
          cardSet.sort(function(){return random() - 0.5;});
          cardSetBlue = cardSet.slice(0,blueNum);
          // отфильтровали только легкие, из них взяли две случайных синие карты
          let tempGreen = cardSetGreen.filter(function(a) {return a.range == 'easy'}).slice(0,5);
          // console.log('tempGreen: ', tempGreen)
          let remain = cardSetGreen.filter(function(a) {return a.range == 'normal'});
          remain.sort(function(){return random() - 0.5;});
          if (tempGreen.length == greenNum) cardSetGreen = tempGreen
            else if (tempGreen.length > greenNum) cardSetGreen = tempGreen.slice(0,greenNum)
            else cardSetGreen = tempGreen.concat(remain[0]);
            cardSetGreen.sort(function(){return random() - 0.5;});;
          // взяли все легкие зеленые карты, в одном случае убрали одну, в одном случае добавили одну нормальную
          let tempBrown = cardSetBrown.filter(function(a) {return a.range == 'easy'}).slice(0,5).concat(cardSetBrown.filter(function(a) {return a.range == 'normal'}).sort((a,b) => 0.5 - random()).slice(0,4));
          cardSetBrown = tempBrown;
          if (cardSetBrown.length > brownNum) cardSetBrown = cardSetBrown.slice(0,brownNum);
          cardSetBrown.sort(function(){return random() - 0.5;});
          // взяли все легкие карты, добавили к ним 4 нормальных, в одном случае одну убрали
          break;
        }
        case 'hardest': {
          cardSet = cardSetBlue.filter(function(a) {return a.range == 'hard'});
          cardSet.sort(function(){return random() - 0.5;});
          cardSetBlue = cardSet.slice(0,blueNum);
          // отфильтровали только сложные, из них взяли две случайных синие карты
          let tempGreen = cardSetGreen.filter(function(a) {return a.range == 'hard'}).concat(cardSetGreen.filter(function(a) {return a.range == 'normal'}).sort((a,b) => 0.5 - random()));
          cardSetGreen = tempGreen;
          if (cardSetGreen.length > greenNum) cardSetGreen = cardSetGreen.slice(0,greenNum);
          cardSetGreen.sort(function(){return random() - 0.5;});
          // взяли все сложные карты, добавили все нормальные, убрали лишнее
          let tempBrown = cardSetBrown.filter(function(a) {return a.range == 'hard'}).concat(cardSetBrown.filter(function(a) {return a.range == 'normal'}).sort((a,b) => 0.5 - random()));
          cardSetBrown = tempBrown;
          if (cardSetBrown.length > brownNum) cardSetBrown = cardSetBrown.slice(0,brownNum);
          cardSetBrown.sort(function(){return random() - 0.5;});
          // взяли все сложные карты, добавили все нормальные, убрали лишнее
          break;
        }
        case 'easy':{
          cardSetBlue = cardSetBlue.filter(function(a) {return a.range !== 'hard'}).sort((a,b) => 0.5 - random()).slice(0,blueNum);
          cardSetGreen = cardSetGreen.filter(function(a) {return a.range !== 'hard'}).sort((a,b) => 0.5 - random()).slice(0,greenNum);
          cardSetBrown = cardSetBrown.filter(function(a) {return a.range !== 'hard'}).sort((a,b) => 0.5 - random()).slice(0,brownNum);
          break;
        }
        case 'hard':{
          cardSetBlue = cardSetBlue.filter(function(a) {return a.range !== 'easy'}).sort((a,b) => 0.5 - random()).slice(0,blueNum);
          cardSetGreen = cardSetGreen.filter(function(a) {return a.range !== 'easy'}).sort((a,b) => 0.5 - random()).slice(0,greenNum);
          cardSetBrown = cardSetBrown.filter(function(a) {return a.range !== 'easy'}).sort((a,b) => 0.5 - random()).slice(0,brownNum);
          break;
        }
        case 'normal':{
          cardSetBlue = cardSetBlue.sort((a,b) => 0.5 - random()).slice(0,blueNum);
          cardSetGreen = cardSetGreen.sort((a,b) => 0.5 - random()).slice(0,greenNum);
          cardSetBrown = cardSetBrown.sort((a,b) => 0.5 - random()).slice(0,brownNum);
          break;
        }
      }
    } 

    function showStages() {
  
      // console.log(countStage);
      // а вот щас будем создавать элементы и элементы внутри элементов. спойлер: не получилось
      let container;
      let i;
      let sum;
      let createName = '';
 
      container = document.getElementById('stage1');
      while(container.firstChild) {container.removeChild(container.firstChild);}
      container = document.getElementById('stage2');
      while(container.firstChild) {container.removeChild(container.firstChild);}
      container = document.getElementById('stage3');
      while(container.firstChild) {container.removeChild(container.firstChild);}

          i = 0;
          sum = 0;
          for (let j = 0; j < 3; j++) {
              let circle = document.createElement('div');
              circle.textContent = countStage[i][j].num;
              sum += countStage[i][j].num;
              circle.className = 'circle';
              circle.style.backgroundColor = countStage[i][j].color;
              container = document.getElementById('stage1');
              container.append(circle);
          }
          if (!sum) document.getElementById('tytle1').style.color = 'gray'
          else document.getElementById('tytle1').style.color = 'white';

          i = 1;
          sum = 0;
          for (let j = 0; j < 3; j++) {
              let circle = document.createElement('div');
              circle.textContent = countStage[i][j].num;
              sum += countStage[i][j].num;
              circle.className = 'circle';
              circle.style.backgroundColor = countStage[i][j].color;
              container = document.getElementById('stage2');
              container.append(circle);
          }
          if (!sum) document.getElementById('tytle2').style.color = 'gray'
          else document.getElementById('tytle2').style.color = 'white';

          i = 2;
          sum = 0;
          for (let j = 0; j < 3; j++) {
              let circle = document.createElement('div');
              circle.textContent = countStage[i][j].num;
              sum += countStage[i][j].num;
              circle.className = 'circle';
              circle.style.backgroundColor = countStage[i][j].color;
              container = document.getElementById('stage3');
              container.append(circle);
          }
          if (!sum) document.getElementById('tytle3').style.color = 'gray'
          else document.getElementById('tytle3').style.color = 'white';
    }

    function nextCard() {
      document.querySelector('.cardPlay').style.display = 'block';
      let url = '';
      count -= 1;
      if (count < 0) {
        return;
      }
      let i = stage[count].stage;
      let j = colors.indexOf(stage[count].color);
      countStage[i][j].num -= 1;
      url = `url("${stage[count].url}") center/cover`;
      document.querySelector('.cardPlay').style.background = url;
      // document.querySelector('.cardPlay').textContent = url;
      console.log(`Цвет: ${stage[count].color}, сложность: ${difName[stage[count].rangeNum]} `);
      console.log(`Файл: ${stage[count].url}`);
      document.querySelector('.cardBack').textContent = `Осталось карт: ${count}. Нажмите для продолжения`;
      if (count == 0) document.querySelector('.cardBack').textContent = `Все карты использованы. Создайте новую колоду`;
      showStages();
    }

    function letsPlay () {
      let str = [];
      countStage = [];
      for (let i = 0; i < 3; i++) {
        // i номер стадии
        str = [];
        for (let j = 0; j < 3; j++) {
          let el = {};
          el.num = 0;
          el.color = colors[j];
          // j номер цвета
          stage.forEach(a => {if (a.color == el.color && a.stage == i) el.num +=1;})
          // console.log(el);   
          str.push(el);
        }
        countStage.push(str);
      }
     
      document.querySelector('.cardBack').textContent = `Осталось карт: ${count}. Нажмите для продолжения`
      document.querySelector('.cardBack').style.display = 'block';
      document.querySelector('.cardPlace').style.display = 'block';
      showStages();
      document.querySelector('.cardBack').addEventListener('click', nextCard);
    }

    // function hidden() {
    //   document.querySelector('.cardPlay').style.display = 'none';
    //   document.querySelector('.cardBack').style.display = 'none';
    //   document.querySelector('.stages').style.display = 'none';
    // }







    function createDeck() {
      document.querySelector('.cardPlay').style.display = 'none';  
    createCardObject();
    createColorDeck();
    // console.log(cardSetBlue);
    cardSetBlue.sort(function(){return random() - 0.5;});
    // console.log(cardSetBlue);
    // console.log(cardSetGreen);
    cardSetGreen.sort(function(){return random() - 0.5;});
    // console.log(cardSetGreen);
    cardSetBrown.sort(function(){return random() - 0.5;});
      // перемешали три цветных колоды
      let hero = {};
      for (let i = 0; i < 4; i++) {
        if (ancientsData[i].id == ancientId) hero = ancientsData[i];
      }
      //нашли древнего по ИД
      for (let i = 0; i < hero.firstStage.greenCards; i++) {
        stageSet[0].push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      }  
      for (let i = 0; i < hero.secondStage.greenCards; i++) {
        stageSet[1].push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      }  
      for (let i = 0; i < hero.thirdStage.greenCards; i++) {
        stageSet[2].push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      } 
      // add green cards to 1, 2 and 3 stage

      for (let i = 0; i < hero.firstStage.brownCards; i++) {
        stageSet[0].push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      }  
      for (let i = 0; i < hero.secondStage.brownCards; i++) {
        stageSet[1].push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      }  
      for (let i = 0; i < hero.thirdStage.brownCards; i++) {
        stageSet[2].push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      } 
         // add brown cards to 1, 2 and 3 stage

      for (let i = 0; i < hero.firstStage.blueCards; i++) {
      stageSet[0].push(cardSetBlue[cardSetBlue.length - 1]);
      cardSetBlue.pop();
      }  
      for (let i = 0; i < hero.secondStage.blueCards; i++) {
        stageSet[1].push(cardSetBlue[cardSetBlue.length - 1]);
        cardSetBlue.pop();
      }  
      for (let i = 0; i < hero.thirdStage.blueCards; i++) {
        stageSet[2].push(cardSetBlue[cardSetBlue.length - 1]);
        cardSetBlue.pop();
      } 
          // add blue cards to 1, 2 and 3 stage      
      for (let i = 0; i < 3; i++) {
        stageSet[i].sort(function(){return random() - 0.5;});
      }
      stage = [];
      // stage = stageSet[2].concat(stageSet[1], stageSet[0]);
      for (let i = 0; i < 3; i++) {
        for (j = 0; j < stageSet[i].length; j++) {
          stageSet[i][j].stage = i;
          stage.push(stageSet[i][j]);
          // console.log(stageSet[i][j]);
        }
      }
      count = stage.length;
      stage.reverse();
 
      letsPlay();
    


    // if (mode == 'easest') cardSet.sort((a,b) => a.rangeNum - b.rangeNum);
    // console.log(cardSet);
    // сортируем массив чтобы для очеь легкого режима все легкие карты были вначале, потом нормальные. для очень тяжелого - наоборот. но это завтра

    
    }

  for (let i = 0; i < 4; i++) {
    let ancientsPerson = document.createElement('div');
    ancientsPerson.className = 'ancientPicture';
    if (ancientsData[i].id == 'azathoth') { 
        ancientsPerson.classList.add('ancientBorder');
        hero = ancientsPerson;
    }
    ancientsPerson.id = ancientsData[i].id;
    ancientsPerson.style.backgroundImage = `url(${ancientsData[i].cardFace})`;
    ancients.append(ancientsPerson);
  }
  document.querySelector('.ancientsBlock').addEventListener('click', selectAncients);

  for (let i = 0; i < 5; i++) {
    let modeButton = document.createElement('button');
    modeButton.className = 'selectModeButton';
    modeButton.id = difficulties[i].id;
    modeButton.textContent = difficulties[i].name;
    buttonsMode.append(modeButton);
  }
  document.getElementById('text1').textContent = ancientId;
  modeName = difficulties.find(a => a.id === mode).name;
  document.getElementById('text2').textContent = modeName;
  document.querySelector('.buttonsBlock').addEventListener('click', selectMode);
  document.getElementById('start').addEventListener('click', createDeck);