require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';

//利用自执行函数得到图片的路径rul
let imageDatas = require('../data/imageData.json');
imageDatas = function getImgURL(imageDataArr){
	for(let i=0, j=imageDataArr.length; i<j; i++){
		let singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
}(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
    	<section className = 'stage'>
    		<section className = 'img-sec'>
    		</section>
    		<nav className="control-nav"></nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
