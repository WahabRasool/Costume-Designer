const images = {
	head: [
		"https://imgeasy.com/share/j5h8ZH6Pnh9d1PNCLbv7.png", // killbill
		"https://imgeasy.com/share/oTNwjx1XxooP79qhhrJn.png", // chef
		'https://imgeasy.com/share/yw0PNclCuSs3158Lxegf.png', // pirate
		"https://imgeasy.com/share/ytuMqHecF3ufnXXWR4So.png", // blue hat
		'https://imgeasy.com/share/2WlgfD7lChG368VlwT62.png', //witch hat
		"https://imgeasy.com/share/pOZL8DCbFJVlzIfoK14Z.png", // dr hat
	],
	face: [
		"https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		"https://imgeasy.com/share/5MjjiE0WWzR23FTqMhqA.png", // glasses
		"https://imgeasy.com/share/QRz6CerwNdfz0LS8g55S.png", // mustache
		"https://imgeasy.com/share/3igkU09t1EkSieQCVfhs.png", // parrot
		"https://imgeasy.com/share/S4YFEElyCMuHuqiqcuim.png", // eyepatch
		'https://imgeasy.com/share/ZALPugLsW9Nl1Fekv4rl.png', // bluetooth
		'https://imgeasy.com/share/kMlnwhm843t6hEfAmEH5.png', // goldtooth
		'https://imgeasy.com/share/Jxk1alPhPfOsmSHZbImY.png', // gross teeth
		'https://imgeasy.com/share/5BzKHAKfQyrw7ThU8CW3.png', // bandana
		"https://imgeasy.com/share/FsYyb1INGHUvqRxj4Dgp.png", // face mask
	],
	rightarm: [
		"https://imgeasy.com/share/AoFMAo9bu33pyy4SDJIy.png", // kill bill
		"https://imgeasy.com/share/kPlf7DlhNO9LnvwGWWHY.png", // chef
		"https://imgeasy.com/share/Bd423E3pBAP6wpd0x5r3.png", // pirate
		"https://imgeasy.com/share/69IynwRikTxKXeeGIGpr.png", // micrphone
		"https://imgeasy.com/share/A87AjsETuCb6yYH3HHMC.png", // pizza
		"https://imgeasy.com/share/cmfZ3WQQzNCVgbsYo6a6.png", // p90
	],
	leftarm: [
		"https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		"https://imgeasy.com/share/LBAFvD9qyGNQqeiaSRVd.png", // chef tattoo
		"https://imgeasy.com/share/YpEhUSZH6eiceCf24Kd1.png", // shield
		"https://imgeasy.com/share/txskNPXnrwFf3AM6SRU5.png", //  broom
	],
	body: [
		"https://imgeasy.com/share/3C0thVHjmIBTIN6vewrG.png", // kill bill
		"https://imgeasy.com/share/hHZcScngYz5rwtwGpZPw.png", // chef
		'https://imgeasy.com/share/NnvmwgzwZ0lLNn1oHd7c.png', // pirate
		"https://imgeasy.com/share/GRKpX5CKzsKjsPX55AoD.png", // jdilla shirt
		"https://imgeasy.com/share/gSK3g9TSILLFIwOyML45.png", // blackdress
		"https://imgeasy.com/share/mC9W3BEpO7paZnaTU97j.png", // dr coat
	],
	pants: [
		"https://imgeasy.com/share/dsE4CNCKlNriG6LCwgEB.png", // kill bill pants
		"https://imgeasy.com/share/ewdNHLyJMuDpaaZBCZWp.png", // chef
		'https://imgeasy.com/share/iUVA4k6Hu8xTWDdyc7k5.png', // pirate
		'https://imgeasy.com/share/cnD4dMWoZWZSI2n2vMWG.png', // blackshorts
		"https://imgeasy.com/share/yFdfFONGZZDMH5vDxoaW.png", // chino
	],
	boots: [
		"https://imgeasy.com/share/zCJrLjnW3VgrEaQmQb7T.png", // kill bill
		"https://imgeasy.com/share/aFXnl2GsFstdQNd3SmeG.png", // chef
		"https://imgeasy.com/share/tKw60tsjygATqVDf01RO.png", // feets
		'https://imgeasy.com/share/eEeXllZ4gUiRD9b4Gxul.png', // blue shoes
		"https://imgeasy.com/share/r35fIAFu1XRTXMxz6DSG.png", // black boots
	]
};

const cards = document.querySelectorAll("#game-board card");

// Set the default image for each card
cards.forEach((card) => {
	const className = card.className;
	if (images[className] && images[className][0]) {
		const img = card.querySelector("img");
		if (img) {
			img.src = images[className][0];
		}
	}
});

// Add click event listeners to cycle through images
cards.forEach((card) => {
	card.addEventListener("click", () => {
		const className = card.className;
		if (images[className]) {
			const img = card.querySelector("img");
			if (img) {
				const currentSrc = img.src;

				// Normalize the current image src for comparison
				const currentNormalized = new URL(currentSrc).href;

				// Find the index of the current image in the array
				const currentIndex = images[className].findIndex(
					(url) => new URL(url).href === currentNormalized
				);

				console.log("Current Index:", currentIndex); // Debugging log

				// Determine the next index, cycling back to 0 if we're at the end
				const nextIndex = (currentIndex + 1) % images[className].length;

				// Set the new image source
				img.src = images[className][nextIndex];

				console.log("Next Image Source:", images[className][nextIndex]); // Debugging log
			}
		}
	});
});
