$("#student_show").submit(function (event) {
	alert("Student successfully logged in!");
});

$("#update-student").submit(function (event) {
	event.preventDefault();

	var unindexed_array = $(this).serializeArray();
	var data = {};

	$.map(unindexed_array, function (n, i) {
		data[n["name"]] = n["value"];
	});

	console.log(data);

	var request = {
		url: `http://localhost:3000/api/students/${data.id}`,
		method: "PUT",
		data: data,
	};

	$.ajax(request).done(function (response) {
		alert("Data Updated Successfully!");
	});
});

$("#update_company").submit(function (event) {
	event.preventDefault();

	var unindexed_array = $(this).serializeArray();
	var data = {};

	$.map(unindexed_array, function (n, i) {
		data[n["name"]] = n["value"];
	});

	console.log(data);

	var request = {
		url: `http://localhost:3000/api/companies/${data.id}`,
		method: "PUT",
		data: data,
	};

	$.ajax(request).done(function (response) {
		alert("Data Updated Successfully!");
	});
});

// $("#studend_signup").submit(function (event) {
// 	alert("Student successfully signed in!");
// });

// if (window.location.pathname == "/student_show") {
// 	$ondelete = $("delete_stud");
// 	$ondelete.click(function () {
// 		var id = $(this).attr("data-id");

// 		var request = {
// 			url: `http://localhost:3000/api/students/${id}`,
// 			method: "DELETE",
// 		};

// 		if (confirm("Do you really want to delete this record?")) {
// 			$.ajax(request).done(function (response) {
// 				alert("Student details deleted successully!");
// 				location.pathname = "/";
// 			});
// 		}
// 	});
// }
