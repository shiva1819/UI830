var Name = document.getElementById('user_name');
var Contact = document.getElementById('user_number');
var Group = document.getElementById('group');
var Save = document.getElementById('save');
var btnWrap = document.getElementById('btnWrap');

var Tbody = document.getElementById('contact_update_area');

var Error = document.getElementsByClassName('error');
	// Element.style.cssProperty = property value.


function errorInfo(disp){
	for (var i = 0; i < Error.length; i++) {
		Error[i].style.display = disp;
	}
}
	
errorInfo("none");


Save.addEventListener('click', function(){
	Name.value
	Contact.value
	Group.value

	var TR = document.createElement('tr');

	var Name_TD = document.createElement('td');
	var Contact_TD = document.createElement('td');
	var Group_TD = document.createElement('td');


	if(Name.value == "" || Contact.value == "" || Group.value == ""){
		alert("Please Enter someinformation into Each Filed...");
		errorInfo("inline");
		return false;
	}else{

	Name_TD.innerText = Name.value;
	Contact_TD.innerText = Contact.value;
	Group_TD.innerText = Group.value;

	console.log(Name_TD);
	console.log(Contact_TD);
	console.log(Group_TD);


	var Edit_TD = document.createElement('td');
	
	var Delete = document.createElement('button');
		Delete.innerText = "Delete";

	var Edit = document.createElement('button');
		Edit.innerText = "Edit";
	// appendChild,

	Edit_TD.appendChild(Delete);
	Edit_TD.appendChild(Edit);

	console.log(Edit_TD);


	TR.appendChild(Name_TD);
	TR.appendChild(Contact_TD);
	TR.appendChild(Group_TD);
	TR.appendChild(Edit_TD);

	console.log(TR);

	Tbody.appendChild(TR);
	errorInfo("none");

	Name.value = "";
	Contact.value = "";
	Group.value = "";


	// Delete Method

	Delete.onclick = function(){
		Deletfn(Tbody, TR);
	}

	// Delete.addEventListener("click", function(){
	// 	Deletfn(Tbody, TR);
	// });;


	Edit.onclick = function(){
		// alert("---------");
		var TR = this.parentNode.parentNode;
		var EditName = TR.childNodes[0];
		var EditContact = TR.childNodes[1];
		var EditGroup = TR.childNodes[2];
		

		Name.value = EditName.innerText;
		Contact.value = EditContact.innerText;
		Group.value = EditGroup.innerText;

		var update = document.createElement('button');
			update.innerText = "Update";

		// setAttribute(id,value); getAttribute(); removeAttribute();

		// ele.attribute = value; 

		update.className = "save";

		Save.style.display = 'none';
		btnWrap.appendChild(update);

		update.onclick = function(){
			if(Name.value == ""){
				alert('Please enter you name..');
				return false;
			}else if(Contact.value == ""){
				alert('Please enter you Contact..');
				return false;
			}else if(Group.value == ""){
				alert('Please choose a group..');
				return false;
			}else{
				EditName.innerText = Name.value;
				EditContact.innerText = Contact.value;
				EditGroup.innerText = Group.value;

				Name.value = ""
				Contact.value = ""
				Group.value = ""

				this.style.display = "none";
				Save.style.display = "inline";
			}
		}


	}

}


function Deletfn(parent, tr){
	parent.removeChild(tr);
}

});