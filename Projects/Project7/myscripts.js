	logo1 = new Image
	logo2 = new Image
if (document.images) {
	logo1.src = "Images/NC_logo.png"
	logo2.src = "Images/NC_logo_pushed.png"
}


			var imgArray = new Array(
			'JelloCakeLg2.jpg',
			'Pasta1Lg2.jpg',
			'RasberryCakeLg2.jpg',
			'VeggiesLg2.jpg'
			);


		var titleArray = new Array(
			'A Jelly Mousse Cake',
			'Ingredients For a Pasta Dish',
			'Raspberry Cake!',
			'Veggies on a Kebab. Yum yub!'
			
		);
			
			var imgPath = "Images/Lg/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}