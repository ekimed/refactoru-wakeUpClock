$(document).on('ready', function() {
	var outerShell = $("<div class='outer-shell'></div>");
  	var innerShell = $("<div class='inner-shell'></div>");
  	var amPm = $("<div class='am-pm'></div>");
  	var clockScreen = $("<div class='clock-screen'></div>");
  	var indicator = $("<div class='indicator'></div>");
  	var timeText = $("<div class='time-text'></div>");
  	var amFrequency = $("<div class='am-frequency'></div>");
  	var pmFrequency = $("<div class='pm-frequency'></div>");
  
  var container = $('div').append(outerShell)
  	
  	outerShell.append(innerShell);

  	innerShell.append(amPm, clockScreen, amFrequency,
  		pmFrequency);

  	amPm.append($('<p id="am-text">AM</p>'), $('<p id="pm-text">PM</p>'));

  	clockScreen.append(indicator, timeText);
  	indicator.append($('<div class="circle" id="am-position"></div>'), 
                    $('<div class="circle" id="pm-position"></div>'));

  	timeText.append($('<div class=time></div>'));

    $('.time').append($('<div id=hour></div>'),
                      $('<div id=colon>:</div>'),
                      $('<div id=minutes></div>'));

  	amFrequency.append($('<p id="am">AM</p>'), 
                    $('<p class="am-ch">53</p>'), 
                    $('<p class="am-ch">60</p>'),
  		              $('<p class="am-ch">70</p>'), 
                    $('<p class="am-ch">90</p>'), 
                    $('<p class="am-ch">110</p>'),
  		              $('<p class="am-ch">140</p>'), 
                    $('<p class="am-ch">170</p>'), 
                    $('<p class="khz">KHz</p>'));

  	pmFrequency.append($('<p id="pm">PM</p>'), 
                      $('<p class="pm-ch">88</p>'), 
                      $('<p class="pm-ch">92</p>'),
  		                $('<p class="pm-ch">96</p>'), 
                      $('<p class="pm-ch">102</p>'), 
                      $('<p class="pm-ch">106</p>'),
  		                $('<p class="pm-ch">108</p>'), 
                      $('<p class="mhz">MHz</p>'));

    $('#colon').text(":");

    function toggle_visibility(id){
      
      return function(){
        var e = document.getElementById(id);
        if (e.style.display === 'inline-block'){
          e.style.display = 'none';
        }
        else{
          e.style.display = 'inline-block';
        }
      }
    }



  	function timeNow(){
  		var currentTime = new Date();
  		var hours = currentTime.getHours();
  		var minutes = currentTime.getMinutes();
  		var seconds = currentTime.getSeconds();

  		var amPm = (hours > 12) ? 'PM' : 'AM';
  		var twentyFourHour = (hours > 12) ? (hours-12) : hours;
  		var formattedHour = (twentyFourHour >= 10) ? twentyFourHour : '0'+twentyFourHour;
  		var formattedMin = (minutes < 10) ? '0'+minutes : minutes;

  		$('#hour').text(formattedHour);
      $('#minutes').text(formattedMin);


  	};
    setInterval(function(){
      var currentTime = new Date();
      var hours = currentTime.getHours();
      if (hours >= 12){
        $('#am-position').hide();
      }
      else{
        $('#pm-position').hide();
      }
          }, 1000);
  	setInterval(timeNow, 1000);
    setInterval(toggle_visibility('colon'), 1000);



});



