var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { 

      newContent += '<li>';
      newContent += '<span>'+ responseObject.events[i].printing_name + ' </span>';
      newContent += '<table><tr>';
      newContent += '<th>'+ responseObject.events[i].distinction1 + ' </th>';
      newContent += '<td>'+ responseObject.events[i].distinction + ' </td>';
      newContent += '</tr>';
      newContent += '<tr>';
      newContent += '<th>'+ responseObject.events[i].purpose1 + ' </th>';
      newContent += '<td>'+ responseObject.events[i].purpose + ' </td>';
      newContent += '</tr>';      
      newContent += '<tr>';
      newContent += '<th>'+ responseObject.events[i].basis_weight1 + ' </th>';
      newContent += '<td>'+ responseObject.events[i].basis_weight + ' </td>';
      newContent += '</tr></table>';
      newContent += '</li>';
    }

 
    document.getElementById('text_ul').innerHTML = newContent;

  //}
};

xhr.open('GET', 'js/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

