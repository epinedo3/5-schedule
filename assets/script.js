var timeBlock = $(".row");

var unixFormat = dayjs().format('MMM D, YYYY, hh:mm:ss a');
$('#currentDay').html(unixFormat)

function colorCode() {
  var hour = dayjs().hour();
  for (let i = 0; i < timeBlock.length; i++) {
    const element = timeBlock[i]
    var blockHour = parseInt(element.id.split('-')[1]);
    //console.log(blockHour, hour);
    if (blockHour === hour) {
      $(element).addClass('present');
    }
    else if (blockHour < hour) {
      $(element).addClass('past');
    }
    else {
      $(element).addClass('future');
    }
  }
};
colorCode();

$('.saveBtn').on("click", function(){
  var clickedButton = $(this);
  var parentEl = clickedButton.parent()[0];
  var id = parentEl.id;
  var sibling = clickedButton.siblings('.description')[0];
  var value = sibling.value;
  localStorage.setItem(id, value);
});

for (let i = 0; i < timeBlock.length; i++) {
  var element = timeBlock[i];
  var id = element.id;
  var value = localStorage.getItem(id);

  var textArea = $(element).children('textarea')[0];
  textArea.value = value;
}


