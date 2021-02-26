var contentDiv = document.getElementById('content');

var navBarUnorderedList = document.createElement('ul');
navBarUnorderedList.id = "navbar";
contentDiv.appendChild(navBarUnorderedList);

var homeListElement = document.createElement('li');
homeListElement.id = "homeListElement";
navBarUnorderedList.appendChild(homeListElement);

var homeAnchor = document.createElement('A');
homeAnchor.href = "#home";
homeAnchor.innerHTML = "Home";
homeListElement.appendChild(homeAnchor);

var menuListElement = document.createElement('li');
menuListElement.id = "menuListElement";
navBarUnorderedList.appendChild(menuListElement);

var menuAnchor = document.createElement('A');
menuAnchor.href = "#menu";
menuAnchor.innerHTML = "Menu";
menuListElement.appendChild(menuAnchor);

var contactListElement = document.createElement('li');
contactListElement.id = "contactListElement";
navBarUnorderedList.appendChild(contactListElement);

var contactAnchor = document.createElement('A');
contactAnchor.href = "#contact";
contactAnchor.innerHTML = "Contact";
contactListElement.appendChild(contactAnchor);

var homeDiv = document.createElement('div');
homeDiv.id = 'home';
contentDiv.appendChild(homeDiv);

var homeTrasnparencyLayerDiv = document.createElement('div');
homeTrasnparencyLayerDiv.id = 'homeTransperancyLayer';
homeDiv.appendChild(homeTrasnparencyLayerDiv);

var homeContentDiv = document.createElement('div');
homeContentDiv.id = 'homeContent';
homeDiv.appendChild(homeContentDiv);

var homeHeading = document.createElement('h1');
homeHeading.innerHTML = "The World's Restaurant";
homeContentDiv.appendChild(homeHeading);
var homeDescription = document.createElement('p');
homeDescription.innerHTML = "We strive to provide the best experiece to every customer.";
homeContentDiv.appendChild(homeDescription);

var menuDiv = document.createElement('div');
menuDiv.id = 'menu';
contentDiv.appendChild(menuDiv);

var menuHeading = document.createElement('h1');
menuHeading.id = "menuHeading";
menuHeading.innerHTML = "Menu";
menuDiv.appendChild(menuHeading);

var menuImg = document.createElement('img');
menuImg.id = 'imgMenu';
menuImg.src = "./css/images/Restaurant_Menu.jpg";
menuDiv.appendChild(menuImg);

var contactDiv = document.createElement('div');
contactDiv.id = 'contact';
contentDiv.appendChild(contactDiv);

var contactCenterAlignDiv = document.createElement('div');
contactCenterAlignDiv.id = "contactCenterAlign";
contactDiv.appendChild(contactCenterAlignDiv)

var contactHeading = document.createElement('h3');
contactHeading.id = 'contactHeading';
contactHeading.innerHTML = "Fine me here:"
contactCenterAlignDiv.appendChild(contactHeading);

var contactImgAnchor = document.createElement('A');
contactImgAnchor.href = "https://github.com/Nitin529";
contactCenterAlignDiv.appendChild(contactImgAnchor)

var contactImg = document.createElement('img');
contactImg.id = 'contactImg';
contactImg.src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
contactImgAnchor.appendChild(contactImg);
