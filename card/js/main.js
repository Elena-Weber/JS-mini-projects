/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here - jQuery objects
	var $backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf'),
		$textLine1 = $('.text-line-1'),
		$textLine2 = $('.text-line-2'),
		$textGreeting = $('.text-greeting'),
		$treeLeaves = $('[id^=treeleaf]'),
		$floorLeaves = $('[id^=floorleaf]'),
		$bird = $('#Bird'),
		$birdHat = $bird.find('#BirdHat'),
		$birdEyes = $bird.find('#leftEye, #rihtEye'),
		$nest = $('#NestAndLeaves'),
		$tree = $('#tree_trunk'),
		$cardContainer = $('.card.container')

	// clear stage - hiding all of them in the very beginning
	function clearStage() {
		var clearTimeline = gsap.timeline();
		clearTimeline
			.set($backFallingLeaves, {autoAlpha: 0})
			.set($textLine1, {autoAlpha: 0})
			.set($textLine2, {autoAlpha: 0})
			.set($textGreeting, {autoAlpha: 0})
			.set($treeLeaves, {autoAlpha: 0})
			.set($bird, {y:'+=65'}) // move the bird 65px down so it's hidden by the nest
			.set($nest, {autoAlpha: 0})
			.set($tree, {autoAlpha: 0})
			.set($floorLeaves, {y:'+=275', onComplete: showContainer}) // move the tree 275px down so it's hidden out of the screen and call the function after it's completed

		;

		function showContainer() {
			$cardContainer.css('display', 'block');
		}

		return clearTimeline;
	}

	// enter floor vegetation
	function enterFloorVegetation() {
		var floorLeavesTimeline = gsap.timeline();
		floorLeavesTimeline
			.staggerTo($floorLeaves, 1, {y:0, ease: Back.easeInOut}, 0.01)
			.fromTo($tree, 1.1, {scaleY:0.2, autoAlpha:0, transformOrigin:'center bottom'}, {scaleY:1, autoAlpha:1, transformOrigin:'center bottom', ease: Back.easeInOut}) // tree grows from bottom/floor, longer on Y
			.fromTo($tree, 0.9, {scaleX:0.2, autoAlpha:0, transformOrigin:'center bottom'}, {scaleX:1, autoAlpha:1, transformOrigin:'center bottom', ease: Back.easeInOut}, '-=0.9') // tree grows from bottom/floor, shorter on X

		return floorLeavesTimeline;
	}

	// enter tree

	// enter the greeting text
	
	// the GO function ...to kick things all off
	function go() {
		console.log("start");
		var masterTimeline = gsap.timeline();
		masterTimeline
			.add(clearStage(), 'scene-clear-stage')
			.add(enterFloorVegetation(), 'scene-floor-vegetation')
			;
	}

	go()

})(jQuery);


