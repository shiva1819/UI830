var Name = document.getElementById('user_name');
var Contact = document.getElementById('user_number');
var Group = document.getElementById('group');
var Save = document.getElementById('save');

var Tbody = document.getElementById('contact_update_area');


Save.addEventListener('click', function(){
	// Name.value
	Contact.value
	Group.value

	var TR = document.createElement('tr');

	var Name_TD = document.createElement('td');
	var Contact_TD = document.createElement('td');
	var Group_TD = document.createElement('td');

	Name_TD.innerText = Name.value;
	Contact_TD.innerText = Contact.value;
	Group_TD.innerText = Group.value;

	console.log(Name_TD);
	console.log(Contact_TD);
	console.log(Group_TD);


	var Edit_TD = document.createElement('td');
	var Delete = document.createElement('button');
	var Edit = document.createElement('button');



});