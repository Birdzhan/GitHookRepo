(function() {
    // Modernizr function to check if browser supports canvas
    var mTest = function() {
        if(Modernizr.canvas) {
            var theCanvas = document.getElementById("Canvas1");
            console.log("Canvas Works! ");
        } else {
            console.log("Your browser does not support canvas.");
        }
    }    
    mTest();
google.load("visualization", "1",{packages:["corechart"]});

//once libaries are loaded then run function 

google.setOnLoadCallback(drawChart);
window.onload = function() {    
   			$('#coin-slider').coinslider({
            effect: 'random',
            width: 960,
            height: 600,
            spw: 7,
            delay: 3000,
            hoverPause: true
        });   
       //First Canvas  
       //Setting up the canvas 
       //Using DrawScript for page logo
        var theCanvas = document.getElementById("Canvas1");
        if (theCanvas && theCanvas.getContext) {
            var ctx = theCanvas.getContext("2d");
            if (ctx) {			
				
				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(19,22);
				ctx.bezierCurveTo(20,22,21,23,23,23);
				ctx.bezierCurveTo(26,23,27,22,27,20);
				ctx.bezierCurveTo(27,18,26,17,24,16);
				ctx.bezierCurveTo(20,15,19,13,19,11);
				ctx.bezierCurveTo(19,8,21,5,25,5);
				ctx.bezierCurveTo(27,5,28,6,29,6);
				ctx.lineTo(28,8);
				ctx.bezierCurveTo(28,8,26,7,25,7);
				ctx.bezierCurveTo(22,7,21,9,21,10);
				ctx.bezierCurveTo(21,12,22,13,25,14);
				ctx.bezierCurveTo(28,15,30,17,30,20);
				ctx.bezierCurveTo(30,22,27,25,23,25);
				ctx.bezierCurveTo(21,25,19,24,18,24);
				ctx.lineTo(19,22);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(45,18);
				ctx.bezierCurveTo(45,23,42,25,39,25);
				ctx.bezierCurveTo(35,25,32,22,32,18);
				ctx.bezierCurveTo(32,13,35,11,39,11);
				ctx.bezierCurveTo(43,11,45,14,45,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(34,18);
				ctx.bezierCurveTo(34,21,36,23,39,23);
				ctx.bezierCurveTo(41,23,43,21,43,18);
				ctx.bezierCurveTo(43,16,42,13,39,13);
				ctx.bezierCurveTo(36,13,34,15,34,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(58,24);
				ctx.bezierCurveTo(57,24,56,25,54,25);
				ctx.bezierCurveTo(50,25,47,22,47,18);
				ctx.bezierCurveTo(47,14,50,11,55,11);
				ctx.bezierCurveTo(56,11,57,11,58,12);
				ctx.lineTo(58,13);
				ctx.bezierCurveTo(57,13,56,13,55,13);
				ctx.bezierCurveTo(52,13,50,15,50,18);
				ctx.bezierCurveTo(50,21,52,23,55,23);
				ctx.bezierCurveTo(56,23,57,23,58,22);
				ctx.lineTo(58,24);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(70,24);
				ctx.bezierCurveTo(70,24,68,25,67,25);
				ctx.bezierCurveTo(62,25,60,22,60,18);
				ctx.bezierCurveTo(60,14,63,11,67,11);
				ctx.bezierCurveTo(68,11,70,11,70,12);
				ctx.lineTo(70,13);
				ctx.bezierCurveTo(69,13,68,13,67,13);
				ctx.bezierCurveTo(64,13,62,15,62,18);
				ctx.bezierCurveTo(62,21,64,23,67,23);
				ctx.bezierCurveTo(68,23,69,23,70,22);
				ctx.lineTo(70,24);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(74,18);
				ctx.bezierCurveTo(75,22,77,23,79,23);
				ctx.bezierCurveTo(81,23,82,23,83,22);
				ctx.lineTo(83,24);
				ctx.bezierCurveTo(82,24,81,25,79,25);
				ctx.bezierCurveTo(75,25,72,22,72,18);
				ctx.bezierCurveTo(72,14,75,11,78,11);
				ctx.bezierCurveTo(83,11,84,15,84,17);
				ctx.bezierCurveTo(84,18,84,18,84,18);
				ctx.lineTo(74,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(82,17);
				ctx.bezierCurveTo(82,15,81,13,78,13);
				ctx.bezierCurveTo(76,13,75,15,75,17);
				ctx.lineTo(82,17);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(87,15);
				ctx.bezierCurveTo(87,14,87,12,87,11);
				ctx.lineTo(89,11);
				ctx.lineTo(89,14);
				ctx.lineTo(89,14);
				ctx.bezierCurveTo(90,12,91,11,93,11);
				ctx.lineTo(94,11);
				ctx.lineTo(94,13);
				ctx.lineTo(93,13);
				ctx.bezierCurveTo(91,13,90,14,90,16);
				ctx.bezierCurveTo(90,17,90,17,90,17);
				ctx.lineTo(90,25);
				ctx.lineTo(87,25);
				ctx.lineTo(87,15);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(116,24);
				ctx.bezierCurveTo(115,24,113,25,111,25);
				ctx.bezierCurveTo(105,25,101,22,101,15);
				ctx.bezierCurveTo(101,9,105,5,111,5);
				ctx.bezierCurveTo(113,5,115,6,116,6);
				ctx.lineTo(115,8);
				ctx.bezierCurveTo(114,8,113,8,111,8);
				ctx.bezierCurveTo(107,8,104,10,104,15);
				ctx.bezierCurveTo(104,20,106,23,111,23);
				ctx.bezierCurveTo(113,23,114,23,115,22);
				ctx.lineTo(116,24);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.fillRect(118,5,2,19);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(126,18);
				ctx.bezierCurveTo(127,22,129,23,131,23);
				ctx.bezierCurveTo(133,23,134,23,135,22);
				ctx.lineTo(135,24);
				ctx.bezierCurveTo(134,24,133,25,131,25);
				ctx.bezierCurveTo(127,25,124,22,124,18);
				ctx.bezierCurveTo(124,14,127,11,130,11);
				ctx.bezierCurveTo(135,11,136,15,136,17);
				ctx.bezierCurveTo(136,18,136,18,136,18);
				ctx.lineTo(126,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(134,17);
				ctx.bezierCurveTo(134,15,133,13,130,13);
				ctx.bezierCurveTo(128,13,127,15,126,17);
				ctx.lineTo(134,17);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(147,25);
				ctx.lineTo(146,23);
				ctx.lineTo(146,23);
				ctx.bezierCurveTo(146,24,144,25,142,25);
				ctx.bezierCurveTo(139,25,138,23,138,21);
				ctx.bezierCurveTo(138,18,141,16,146,16);
				ctx.lineTo(146,16);
				ctx.bezierCurveTo(146,15,146,13,143,13);
				ctx.bezierCurveTo(142,13,141,13,140,14);
				ctx.lineTo(139,12);
				ctx.bezierCurveTo(140,11,142,11,143,11);
				ctx.bezierCurveTo(148,11,149,14,149,16);
				ctx.lineTo(149,21);
				ctx.bezierCurveTo(149,23,149,24,149,25);
				ctx.lineTo(147,25);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(146,18);
				ctx.bezierCurveTo(144,18,141,18,141,21);
				ctx.bezierCurveTo(141,22,142,23,143,23);
				ctx.bezierCurveTo(145,23,146,22,146,21);
				ctx.lineTo(146,20);
				ctx.lineTo(146,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(155,7);
				ctx.lineTo(155,11);
				ctx.lineTo(159,11);
				ctx.lineTo(159,13);
				ctx.lineTo(155,13);
				ctx.lineTo(155,20);
				ctx.bezierCurveTo(155,22,156,23,157,23);
				ctx.bezierCurveTo(158,23,158,23,159,23);
				ctx.lineTo(159,25);
				ctx.bezierCurveTo(158,25,158,25,157,25);
				ctx.bezierCurveTo(156,25,155,25,154,24);
				ctx.bezierCurveTo(153,23,153,22,153,20);
				ctx.lineTo(153,13);
				ctx.lineTo(151,13);
				ctx.lineTo(151,11);
				ctx.lineTo(153,11);
				ctx.lineTo(153,8);
				ctx.lineTo(155,7);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(161,22);
				ctx.bezierCurveTo(162,23,163,23,165,23);
				ctx.bezierCurveTo(166,23,167,22,167,21);
				ctx.bezierCurveTo(167,20,167,19,165,19);
				ctx.bezierCurveTo(162,18,161,16,161,15);
				ctx.bezierCurveTo(161,13,163,11,166,11);
				ctx.bezierCurveTo(167,11,168,11,169,12);
				ctx.lineTo(169,13);
				ctx.bezierCurveTo(168,13,167,13,166,13);
				ctx.bezierCurveTo(164,13,164,13,164,14);
				ctx.bezierCurveTo(164,16,164,16,166,17);
				ctx.bezierCurveTo(168,18,170,19,170,21);
				ctx.bezierCurveTo(170,23,168,25,165,25);
				ctx.bezierCurveTo(163,25,162,25,161,24);
				ctx.lineTo(161,22);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(179,22);
				ctx.bezierCurveTo(180,22,181,23,183,23);
				ctx.bezierCurveTo(185,23,187,22,187,20);
				ctx.bezierCurveTo(187,18,186,17,183,16);
				ctx.bezierCurveTo(180,15,178,13,178,11);
				ctx.bezierCurveTo(178,8,181,5,184,5);
				ctx.bezierCurveTo(186,5,188,6,189,6);
				ctx.lineTo(188,8);
				ctx.bezierCurveTo(187,8,186,7,184,7);
				ctx.bezierCurveTo(182,7,181,9,181,10);
				ctx.bezierCurveTo(181,12,182,13,185,14);
				ctx.bezierCurveTo(188,15,189,17,189,20);
				ctx.bezierCurveTo(189,22,187,25,183,25);
				ctx.bezierCurveTo(181,25,179,24,178,24);
				ctx.lineTo(179,22);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(195,7);
				ctx.lineTo(195,11);
				ctx.lineTo(199,11);
				ctx.lineTo(199,13);
				ctx.lineTo(195,13);
				ctx.lineTo(195,20);
				ctx.bezierCurveTo(195,22,196,23,197,23);
				ctx.bezierCurveTo(198,23,198,23,199,23);
				ctx.lineTo(199,25);
				ctx.bezierCurveTo(198,25,198,25,197,25);
				ctx.bezierCurveTo(196,25,195,25,194,24);
				ctx.bezierCurveTo(193,23,193,22,193,20);
				ctx.lineTo(193,13);
				ctx.lineTo(191,13);
				ctx.lineTo(191,11);
				ctx.lineTo(193,11);
				ctx.lineTo(193,8);
				ctx.lineTo(195,7);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(214,18);
				ctx.bezierCurveTo(214,23,210,25,207,25);
				ctx.bezierCurveTo(203,25,201,22,201,18);
				ctx.bezierCurveTo(201,13,204,11,207,11);
				ctx.bezierCurveTo(211,11,214,14,214,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(203,18);
				ctx.bezierCurveTo(203,21,205,23,207,23);
				ctx.bezierCurveTo(210,23,211,21,211,18);
				ctx.bezierCurveTo(211,16,210,13,207,13);
				ctx.bezierCurveTo(204,13,203,15,203,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(217,15);
				ctx.bezierCurveTo(217,14,217,12,217,11);
				ctx.lineTo(219,11);
				ctx.lineTo(219,14);
				ctx.lineTo(219,14);
				ctx.bezierCurveTo(220,12,221,11,223,11);
				ctx.bezierCurveTo(223,11,223,11,224,11);
				ctx.lineTo(224,13);
				ctx.bezierCurveTo(223,13,223,13,223,13);
				ctx.bezierCurveTo(221,13,220,14,220,16);
				ctx.bezierCurveTo(219,17,219,17,219,17);
				ctx.lineTo(219,25);
				ctx.lineTo(217,25);
				ctx.lineTo(217,15);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(227,18);
				ctx.bezierCurveTo(227,22,229,23,232,23);
				ctx.bezierCurveTo(234,23,235,23,236,22);
				ctx.lineTo(236,24);
				ctx.bezierCurveTo(235,24,234,25,232,25);
				ctx.bezierCurveTo(227,25,225,22,225,18);
				ctx.bezierCurveTo(225,14,227,11,231,11);
				ctx.bezierCurveTo(236,11,237,15,237,17);
				ctx.bezierCurveTo(237,18,237,18,237,18);
				ctx.lineTo(227,18);
				ctx.fill();

				ctx.fillStyle="rgb(255,204,51)";
				ctx.beginPath();
				ctx.moveTo(234,17);
				ctx.bezierCurveTo(234,15,234,13,231,13);
				ctx.bezierCurveTo(229,13,227,15,227,17);
				ctx.lineTo(234,17);
				ctx.fill();


            }
        }
        	
        //2nd Canvas Pie Chart 
          var canvas = document.getElementById("Canvas2"),
                ctx2 = canvas.getContext("2d"),
                data = [
                    {
                        value: 50,
                        color: "#E5E51E"
                    },
                    {
                        value: 15,
                        color: "#F0EAD6"
                    },
                    {
                        value: 35,
                        color: "#ACCBE8"
                    }
                   
        ];
            new Chart(ctx2).Pie(data);  
            
        //Hides gallery section on load 
        $('#gallery').hide()
        //Shows Gallery Section When Button Clicked
        $("#hide_showVideo").click(function(){
            $("#gallery").fadeToggle(600);
            });
   
        //Hides charts and data visualisation on load
        $('#about').hide()
        //Shows Chart Section When Button Clicked
        $("#hide_dataCharts").click(function(){
            $("#about").slideToggle(600);
            
        });
        
        
    }
        	function drawChart(){
	
	//create data table using array 
	
			var data = google.visualization.arrayToDataTable([
				["Cleats Number","# Of Pairs Brought"],
				["18", 8],
				["11", 40],
				["6", 12],
				["5", 10],
				["4", 30]		
			]);
			
			var options = {
				title: "Favorite Brands Cleats 2014"
	}
		
	//Create the chart 
	var chart = new google.visualization.BarChart(document.getElementById("bar"));
	
	
	//draw the chart
	
	chart.draw(data, options);
	
}   
})();




