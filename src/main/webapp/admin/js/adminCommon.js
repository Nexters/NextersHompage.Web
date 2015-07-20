function getPageContents(fileLocation) {
	$("#page-wrapper").load(fileLocation);
}

function getUserInformation(data) {
	var rsltData = data.resData[0];
	if(data.result=="success"){
		$("#userName").html(rsltData.userName);
	} else {
		alert("오류가 발생했습니다.\n계속적으로 발생시 관리자께 해당 메시지를 캡쳐하여 보내주세요.\n오류 코드: "+rsltData.errorCd+"\n오류 메시지: "+rsltData.errorMsg);
		location.href="/";
	}
}

$(document).ready(function() {
	requestJsonData("api/main/loginUser.do", {}, getUserInformation);
});