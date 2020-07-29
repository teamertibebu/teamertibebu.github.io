
$(document).ready(() => {
  const $body = $('body');

  let $header = $('<h1>').text('Twiddler!').attr('id', 'header').prependTo($body)
  //Div holding tweetBox and possibly more...
  let $upperDiv = $('<div>').attr('id', 'upperDiv').appendTo($body)
  //Div to hold tweet 
  //Actual textarea for the tweet box...
  let $tweetBox = $('<textarea>').attr({'id':'tweetBox', 'rows':'5', 'cols':'30','placeholder':'Twidd it!'}).prependTo($upperDiv);
  //Input to hold username..
  let $username = $('<input>').attr({'id': 'username', 'type': 'text','placeholder':'Username'}).prependTo($upperDiv)


  //Send tweet button...
  // streams.users[visitor] = []
  let tally = 0;
  let $tweetButton = $('<button>').attr('class','button').text('Send Twidd').appendTo($upperDiv).click(function() {
  let value = $tweetBox.val();
  let name = $username.val();
  $refreshButton.hide();
  if(tally === 0) {
    window.visitor = name;
    streams.users[name] = [];
    writeTweet(value);
  } else {
    writeTweet(value);
  }
  tally++;
   $username.remove();
   $tweetBox.val('');
   
   const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
   const $tweet = $('<div>').attr('class', 'tweet').text(`${value}`).appendTo($tweetDiv);
     const $user = $('<div>').attr('class', 'user').text(`@${name}`).appendTo($tweetDiv).click(function() {
       $timeline.empty();
       streams.users[name].forEach(tweet => {
         const time = moment(tweet.created_at).fromNow();
          const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
          const $tweet = $('<div>').attr('class', 'tweet').text(`${tweet.message}`).appendTo($tweetDiv);
          const $user = $('<div>').attr('class', 'user').text(`@${name}`).appendTo($tweetDiv);
          const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv);
        })
  
        //Home Button!
        let $homeButton = $('<button>').text('Home Feed').attr({'id':'homeButton','class': 'button'}).prependTo($timelineMain).click(function() {
          $timeline.empty();
          $homeButton.hide();
          $refreshButton.show()
          let tweets = streams.home;
      
          tweets.forEach(tweet => {
            const time = moment(tweet.created_at).fromNow();
  
            const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
            const $tweet = $('<div>').attr('class', 'tweet').text(`${tweet.message}`).appendTo($tweetDiv);
            const $user = $('<div>').attr('class', 'user').text(`@${tweet.user}`).appendTo($tweetDiv).click(function() {
                $timeline.empty();
        
                for(let key in streams.users) {
                  if(key === tweet.user) {
                    streams.users[key].forEach(element => {
                      const time = moment(element.created_at).fromNow();
    
                      const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
                      if(element.user === 'Guest') {
                        const $user = $('<div>').attr('class', 'user').text(`@${$username.val()}`)
                      } else {
                        const $user = $('<div>').attr('class', 'user').text(`@${element.user}`).appendTo($tweetDiv);
                      }
                      const $tweet = $('<div>').attr('class', 'tweet').text(`${element.message}`).appendTo($tweetDiv)
                      const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv)
                    })
                  }
                }
              });
            const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv);
          })
        })
  
  
      });
    const $date = $('<div>').attr('class', 'date').text(moment(streams.users[name][streams.users[name].length - 1].created_at).fromNow()).appendTo($tweetDiv);
    
  })
  
  
  
  
  //Main timeline div that contains actual timeline and refresh button.
  let $timelineMain = $('<div>').attr('id', 'timelineMain').appendTo($body);
  //Actual timeline div...
  let $timeline = $('<div>').attr('id', 'timeline').appendTo($timelineMain)
  
  const $tweets = streams.home.map((tweet) => {
    const time = moment(tweet.created_at).fromNow();

    const $tweetDiv = $('<div></div>').attr('class', 'tweetDiv').appendTo($timeline);
    const $tweet = $('<div>').attr('class', 'tweet').text(`${tweet.message}`).appendTo($tweetDiv);
    const $user = $('<div>').attr('class', 'user').text(`@${tweet.user}`).appendTo($tweetDiv).click(function() {
        $timeline.empty();
        $refreshButton.hide();
        for(let key in streams.users) {
          if(key === tweet.user) {
            streams.users[key].forEach(element => {
              const time = moment(element.created_at).fromNow();
  
              const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
              const $tweet = $('<div>').attr('class', 'tweet').text(`${element.message}`).appendTo($tweetDiv)
              const $user = $('<div>').attr('class', 'user').text(`@${element.user}`).appendTo($tweetDiv);
              const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv)
            })
          }
        }
  
        //Home Button!
        let $homeButton = $('<button>').text('Home Feed').attr({'id':'homeButton','class': 'button'}).prependTo($timelineMain).click(function() {
          $timeline.empty();
          $homeButton.hide();
          $refreshButton.show()
          let tweets = streams.home;
      
          tweets.forEach(tweet => {
            const time = moment(tweet.created_at).fromNow();
  
            const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
            const $tweet = $('<div>').attr('class', 'tweet').text(`${tweet.message}`).appendTo($tweetDiv);
              const $user = $('<div>').attr('class', 'user').text(`@${tweet.user}`).appendTo($tweetDiv).click(function() {
                $timeline.empty();
        
                for(let key in streams.users) {
                  if(key === tweet.user) {
                    streams.users[key].forEach(element => {
                      const time = moment(element.created_at).fromNow();
    
                      const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
                      const $tweet = $('<div>').attr('class', 'tweet').text(`${element.message}`).appendTo($tweetDiv)
                      const $user = $('<div>').attr('class', 'user').text(`@${element.user}`).appendTo($tweetDiv);
                      const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv)
                    })
                  }
                }
              });
            const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv);
          })
        })
  
  
      });
    const $date = $('<div>').attr({'class': 'date', 'data-time': tweet.created_at}).text(`${time}`).appendTo($tweetDiv);

    
    // $tweet.text(text);
    
    // return $tweet;
  });
  // $timeline.append($tweets);
  

  //Button to refresh feed. Nested within $timelineMain div...
let $refreshButton = $('<button>').text('Show New Twidds').attr({'class': 'button', 'id':'refreshButton'}).prependTo($timelineMain).click(function() {
  
  let tweets = streams.home;
  let ran = Math.floor(Math.random() * 10)
  for(let i = tweets.length - ran; i < tweets.length; i++) {
    // const text = `@${tweets[i].user}: ${tweets[i].message} ${tweets[i].created_at}`;
    const time = moment(tweets[i].created_at).fromNow();

    const $tweetDiv = $('<div></div>').attr('class', 'tweetDiv').prependTo($timeline);
    // const text = `@${tweet.user}: ${tweet.message} ${tweet.created_at}`;
    const $tweet = $('<div>').attr('class', 'tweet').text(`${tweets[i].message}`).appendTo($tweetDiv);
      const $user = $('<div>').attr('class', 'user').text(`@${tweets[i].user}`).appendTo($tweetDiv).click(function() {
        $timeline.empty();
        $refreshButton.hide()
        for(let key in streams.users) {
          if(key === tweets[i].user) {
            streams.users[key].forEach(element => {
              const time = moment(element.created_at).fromNow();
  
              const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
              const $tweet = $('<div>').attr('class', 'tweet').text(`${element.message}`).appendTo($tweetDiv)
              const $user = $('<div>').attr('class', 'user').text(`@${element.user}`).appendTo($tweetDiv);
              const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv)
            })
          }
        }
  
        //Home Button!
        let $homeButton = $('<button>').text('Home Feed').attr({'id':'homeButton','class': 'button'}).prependTo($timelineMain).click(function() {
          $timeline.empty();
          $homeButton.hide();
          $refreshButton.show();
          let tweets = streams.home;
      
          tweets.forEach(tweet => {
            const time = moment(tweet.created_at).fromNow();
  
            const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
            const $user = $('<div>').attr('class', 'user').text(`@${tweet.user}`).appendTo($tweetDiv).click(function() {
              $timeline.empty();
      
              for(let key in streams.users) {
                if(key === tweet.user) {
                  streams.users[key].forEach(element => {
                    const time = moment(element.created_at).fromNow();
  
                    const $tweetDiv = $('<div>').attr('class', 'tweetDiv').prependTo($timeline);
                    if(element.user === 'Guest') {
                      const $user = $('<div>').attr('class', 'user').text(`@${$username.val()}`)
                    } else {
                      const $user = $('<div>').attr('class', 'user').text(`@${element.user}`).appendTo($tweetDiv);
                    }
                    const $tweet = $('<div>').attr('class', 'tweet').text(`${element.message}`).appendTo($tweetDiv)
                    const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv)
                  })
                }
              }
            });
            const $tweet = $('<div>').attr('class', 'tweet').text(`${tweet.message}`).appendTo($tweetDiv);
            const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv);
          })
        })
  
  
  
      });
    const $date = $('<div>').attr('class', 'date').text(`${time}`).appendTo($tweetDiv);



    // $tweet.text(text);
    // $timeline.prepend($tweet)
  }
})

//Adding tweets to feed...



function updateTime(){
  const $date = $(`.date`); //accesses all
  
  for(let i = 0; i < $date.length; i++){ //loops over all tweets
  let time = $date[i].dataset.time //access attribute data-time
  $date[i].innerHTML = `${moment(time).fromNow()}`
  //for every occurence
  }
  }
  setInterval(() => {updateTime()}, 60000);


});
