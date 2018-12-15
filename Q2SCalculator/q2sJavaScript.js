//<!--This is q2sJavaScript.js-->

function ResetFields()
{
	$("input").each(function()
	{		
		(this).text = "0";
			
	})
	$("#quarterOut").text("0");
	$("#semesterOut").text("0");
	$("#semiRemain").text("0");
}

function QtoS()
{
	var quarterUnits = parseFloat($("#quarterIn").val());
	var semesterUnits = $("#semesterOut");
	var output = (quarterUnits / 1.5);
	
	semesterUnits.text(output);
}
function StoQ()
{
	var quarterUnits = $("#quarterOut");
	var semesterUnits = parseFloat($("#semesterIn").val());
	var output = (semesterUnits * 1.5);
	
	quarterUnits.text(output);
}

function GradPlan()
{
	var quarterUnits = parseFloat($("#qtrCompleted").val());
	var semsterUnits = $("#semiRemain");
	
	var output = 120.0 - (quarterUnits/1.5);
	
	semsterUnits.text(output);
}
//Check to make sure that characters entered are numbers
function isNumberKey(evt) 
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
        return false;

    return true;
}