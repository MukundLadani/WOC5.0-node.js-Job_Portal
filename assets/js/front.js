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

	location.replace(`/student_show?email=${data.email}`);
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

	location.replace(`/company_show?email=${data.email}`);
});

// $("#studend_signup").submit(function (event) {
// 	alert("Student successfully signed in!");
// });

$(document).on("click", ".delete_student", function () {
	var id = $(this).attr("data-id");
	console.log(id);

	var request = {
		url: `http://localhost:3000/api/students/delete/${id}`,
		method: "DELETE",
	};

	if (confirm("Do you really want to delete this record?")) {
		$.ajax(request).done(function (response) {
			alert("Student details deleted successully!");
			location.pathname = "/student_login";
		});
	}
});

$(document).on("click", ".delete_company", function () {
	var id = $(this).attr("data-id");
	console.log(id);

	var request = {
		url: `http://localhost:3000/api/companies/delete/${id}`,
		method: "DELETE",
	};

	if (confirm("Do you really want to delete this record?")) {
		$.ajax(request).done(function (response) {
			alert("Company details deleted successully!");
			location.pathname = "/company_login";
		});
	}
});
