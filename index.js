let givenElement = document.getElementById("text");
let htmlContent = `<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full Equity article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br> Privacy Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>`;
let plainText = `Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full Equity article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Privacy Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------`;
let plainTextPositions = [
  {
    start: 241,
    end: 247,
  },
  {
    start: 533,
    end: 540,
  },
];

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {

  let requiredIndex;

      //finding the words with the given positions

      let words = plainTextPositions.map((value) => {
      let word= plainText.slice(value.start, value.end);
      let start= value.start;
      let end= value.end;

      //finding the occurences of the word in the plain text

      let occurances = [...plainText.matchAll(word)];

      //finding the indexes of the occured words matching them with the given positions

      occurances.find((item,index)=>{
        if(item.index===start){
          requiredIndex=index;
        }
      })

      //returning the word with the its index position

      return{
        word,requiredIndex
      }
  });

  //mapping the words and extracting that particular index word with start and end positions to replace

  words.map((value) => {
    let indexes = [...htmlContent.matchAll(value.word)];
    let match = indexes[value.requiredIndex];
    let matchedword = match[0];
    let matchedIndex = match.index;
    let endIndex = matchedIndex+(matchedword.length);

    //replacing the word with highlighted word 

    htmlContent =  (htmlContent.substr(0,matchedIndex)+`<mark>${matchedword}</mark>`+htmlContent.substr(endIndex));

  });

  return htmlContent;
}

givenElement.innerHTML = highlightHTMLContent(
  htmlContent,
  plainText,
  plainTextPositions
);
