(function($){
	'use strict';

	// jQuery objects
	var $body = $('body'),
		$backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf'),
		$textLine1 = $('.text-line-1'),
		$textLine2 = $('.text-line-2'),
		$textGreeting = $('.text-greeting'),
		$treeLeaves = $('[id^=treeleaf]'),
		$floorLeaves = $('[id^=floorleaf]'),
		$bird = $('#Bird'),
		$birdHat = $bird.find('#BirdHat'),
		$birdEyes = $bird.find('#leftEye, #rightEye'),
		$nest = $('#NestAndLeaves'),
		$tree = $('#tree_trunk'),
		$cardContainer = $('.card.container')

	// hide all objects from start
	function clearStage() {
		var clearTimeline = gsap.timeline();
		clearTimeline
			.set($backFallingLeaves, {autoAlpha: 0}) // make invisible
			.set($textLine1, {autoAlpha: 0})
			.set($textLine2, {autoAlpha: 0})
			.set($textGreeting, {autoAlpha: 0})
			.set($treeLeaves, {autoAlpha: 0})
			.set($bird, {y:'+=65', autoAlpha: 0}) // move bird 65px down so it's hidden by nest
			.set($nest, {autoAlpha: 0})
			.set($tree, {autoAlpha: 0})
			.set($floorLeaves, {y:'+=275', onComplete: showContainer}) // move tree 275px down so it's hidden beyond screen and call function below after it's completed
		;

		function showContainer() {
			$cardContainer.css('display', 'block'); // display all
		}

		return clearTimeline;
	}

	// leaves on bottom
	function enterFloorVegetation() {
		var floorLeavesTimeline = gsap.timeline();
		floorLeavesTimeline
			.staggerTo($floorLeaves, 1, {y:0, ease: Back.easeInOut}, 0.01)
			.fromTo($tree, 1.1, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, {scaleY:1, autoAlpha:1, transformOrigin:'center bottom', ease: Back.easeInOut}) // tree grows from bottom/floor, longer on Y
			.fromTo($tree, 0.9, {scaleX:0.2, autoAlpha:0, transformOrigin:'center bottom'}, {scaleX:1, autoAlpha:1, transformOrigin:'center bottom', ease: Back.easeInOut}, '-=0.9') // tree grows from bottom/floor, shorter on X
		;

		return floorLeavesTimeline;
	}

	// tree leaves, bird, nest
	function enterTreeStuff() {
		var treeStuffTimeline = gsap.timeline();
		treeStuffTimeline
			.staggerFromTo($treeLeaves, 0.5, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, {scaleY:1, autoAlpha:1, transformOrigin:'center bottom'}, 0.02)
			.fromTo($nest, 1, {y:0,scale:0.2, autoAlpha:0, transformOrigin:'center center'}, {y:'-=15', scale:1, autoAlpha:1, transformOrigin:'center center', ease: Elastic.easeOut}, '+=0.2')
			.to($nest, 0.3, {y:'+=15', ease: Bounce.easeOut}, '-=0.2')
			.add('nest-pop-in')
			.set($birdHat, {rotation: 12, x:'+=6'})
			.to($bird, 1.4, {y:'-=39', autoAlpha: 1, ease: Power4.easeInOut}, 'nest-pop-in+=0.1')
			.add('bird-peeking')
			.set($birdEyes, {autoAlpha:0})
			.set($birdEyes, {autoAlpha:1}, '=+0.2') // adjust delay
			.set($birdEyes, {autoAlpha:0}, '+=0.3')
			.set($birdEyes, {autoAlpha:1}, '+=0.2')
			.add('bird-blinks')
			.to($bird, 0.8, {y:'-=34', ease: Power4.easeInOut})
			.to($bird, 0.3, {y:'+=8', ease: Back.easeOut})
			.to($birdHat, 0.4, {y:'-=12'}, '-=0.6')
			.to($birdHat, 0.3, {y:0, rotation:0, x:0, onComplete: startBlinking}, '-=0.2')
		;

		function startBlinking() {
			var birdBlinksTimeline = gsap.timeline({repeat: -1, repeatDelay: 5}); // creating a loop
			birdBlinksTimeline
				.set($birdEyes, {autoAlpha:0})
				.set($birdEyes, {autoAlpha:1}, '=+0.2')
				.set($birdEyes, {autoAlpha:0}, '+=1.2')
				.set($birdEyes, {autoAlpha:1}, '+=0.2')

			return birdBlinksTimeline;
		}

		return treeStuffTimeline;
	}

	// text
	function enterGreeting() {
		var greetingTimeline = gsap.timeline();
		greetingTimeline
			.fromTo($textLine1, 1, {y:'-=50', autoAlpha: 0}, {y:0, autoAlpha: 1, onComplete: startLoops})
			.fromTo($textLine2, 1, {y:'-=25', autoAlpha: 0}, {y:0, autoAlpha: 1})
			.staggerFromTo($textGreeting, 0.5, {scale:2, autoAlpha:0, transformOrigin: 'center center'}, {scale:1, autoAlpha:1, transformOrigin: 'center center'}, 0.1);

		function startLoops() {
			var colors = ['#edcc93', '#f7e3ae', '#f3ebcc', '#edcc93'];
			var backgroundTimeline = gsap.timeline({repeat:-1, repeatDelay:2});
			backgroundTimeline
				.to($body, 3, {backgroundColor: colors[0]})
				.to($body, 3, {backgroundColor: colors[1]}, '+=2')
				.to($body, 3, {backgroundColor: colors[2]}, '+=2')
				.to($body, 3, {backgroundColor: colors[3]}, '+=2');

			gsap.set($backFallingLeaves, {y:-100, autoAlpha:0.2});
			gsap.to("#brownLeaf", 10+Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: fallingLeaves, onCompleteParams: ['#brownLeaf']});
			gsap.to("#redLeaf", 10+Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: fallingLeaves, onCompleteParams: ['#redLeaf']});
			gsap.to("#orangeLeaf", 10+Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: fallingLeaves, onCompleteParams: ['#orangeLeaf']});

			function fallingLeaves(leaf) {
				var range = Math.random()*800,
					offset = 400,
					newPosition = range-offset;

				gsap.set(leaf, {x: newPosition, y:-100, autoAlpha: 0.2, rotation: Math.random()*360})
				gsap.to(leaf, 10+Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: fallingLeaves, onCompleteParams: [leaf]});
			}
		}

		return greetingTimeline;
	}
	
	// starting function
	function go() {
		// console.log("start");
		var masterTimeline = gsap.timeline();
		masterTimeline
			.add(clearStage(), 'scene-clear-stage')
			.add(enterFloorVegetation(), 'scene-floor-vegetation')
			.add(enterTreeStuff(), 'scene-tree-stuff')
			.add(enterGreeting(), 'scene-greeting')
		;
	}

	go()

})(jQuery);