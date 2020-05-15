
function sendAjaxRequest(element,urlToSend) {
	var clickedButton = element;
	$.ajax({type: "GET",
		url: urlToSend,
		success:function(result){
		},
		error:function(result)
		{
			alert('result');
		}
	});
}

$(document).ready(function(){
	var sprinklers = ['Top Garden', 'Bottom Garden', 'Kitchen Garden', 'Lawn'];
	
	sprinklers.forEach(function(sprinklerName) {
		$('#' + sprinklerName.replace(' ', '') + 'On').click(function(e){
			e.preventDefault();
			sendAjaxRequest($(this),'/sprinklers/'+ sprinklerName +'/1');
		});
		$('#' + sprinklerName.replace(' ', '') + 'Off').click(function(e){
			e.preventDefault();
			sendAjaxRequest($(this),'/sprinklers/'+ sprinklerName +'/0');
		});
	});
});