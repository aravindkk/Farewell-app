$(function(){
	//init 
	$("#landing").hide();
	$("#home").show();

    $("#fs").click(function(){
    	if(screenfull.enabled)
    	{
    		screenfull.request();
    	}
    	else
    	{
    		//fullscreen not enabled, sorry
    		$("#fs").innerHTML="------";
    	}
    });

    //handle home button press
    $("#go-land").click(function(){
    	$("#home").hide();
    	$("#landing").show();
    });

    $("#nav-label1").click(function(){
  	$("#li-2").removeClass("active");
  	$("#li-3").removeClass("active");
  	$("#li-4").removeClass("active");
  	$("#li-1").addClass("active");
  	$("#nmenu").offcanvas('hide');
  	setTimeout(function(){$("#myModal").modal('show');},1000);
  });
  $("#nav-label2").click(function(){
  	$("#li-1").removeClass("active");
  	$("#li-3").removeClass("active");
  	$("#li-4").removeClass("active");
  	$("#li-2").addClass("active");
  	$("#nmenu").offcanvas('hide');
  });	
  $("#nav-label3").click(function(){
  	$("#li-1").removeClass("active");
  	$("#li-2").removeClass("active");
  	$("#li-4").removeClass("active");
  	$("#li-3").addClass("active");
  	$("#nmenu").offcanvas('hide');
  	setTimeout(function(){$("#myModal").modal('show');},1000);
  });
  $("#nav-label4").click(function(){
  	$("#li-1").removeClass("active");
  	$("#li-2").removeClass("active");
  	$("#li-3").removeClass("active");
  	$("#li-4").addClass("active");
  	$("#nmenu").offcanvas('hide');
  	setTimeout(function(){$("#myModal").modal('show');},1000);
  });
});

function encodeImageFileasURL()
{
	var filesSelected = document.getElementById("image").files;
	console.log('here');
	if(filesSelected.length > 0)
	{
		var fileToLoad = filesSelected[0];
		var fileReader = new FileReader();

		fileReader.onload = function(fileLoadedEvent)
		{
			//get base64 encoded string
			var srcData = fileLoadedEvent.target.result;

			var newImage = document.createElement('img');
			newImage.src = srcData;
			document.getElementById("imgTest").innerHTML = newImage.outerHTML;
		}
		fileReader.readAsDataURL(fileToLoad);
	}
}