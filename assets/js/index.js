$("#student_show").submit(function (event) {
	alert("Student successfully logged in!");
});

// $("#studend_signup").submit(function (event) {
// 	alert("Student successfully signed in!");
// });

if (window.location.pathname == "/student_show") {
	$ondelete = $("delete_stud");
	$ondelete.click(function () {
		var id = $(this).attr("data-id");

		var request = {
			url: `http://localhost:3000/api/students/${id}`,
			method: "DELETE",
		};

		if (confirm("Do you really want to delete this record?")) {
			$.ajax(request).done(function (response) {
				alert("Student details deleted successully!");
				location.pathname = "/";
			});
		}
	});
}
