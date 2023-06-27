const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let body = '';
  let data = '';
  let count = 0;

  // parse json data here...

  resp.on('data', function (chunk){
    body += chunk;
  });

  resp.on('end',function(){
    String.prototype.replaceAt = function(index, replacement){
      return this.substring(0,index) + replacement + this.substring(index + replacement.length)
    }
    data = JSON.parse(body);
    let ageArray = data.data.split(",");
    for(let i=0; i<ageArray.length; i++){
      if( !ageArray[i].includes('key')){
        let subStr = +ageArray[i].substring(5);
        if( subStr >= 50){
          count++;
        }
      }
    }
    let challengeToken = count+'fpk6ou1lb5';
    for(let i=2; i<=challengeToken.length; i++){
      if( (i+1)%3 == 0){
        challengeToken = challengeToken.substring(0,i) + 'X' + challengeToken.substring(i+1);
      }
    }
    console.log(challengeToken);
  });

});