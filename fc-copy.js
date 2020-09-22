// ==UserScript==
// @name         FreedCamp Issue Copier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  TamperMonkey script for FreedCamp which copies nicely formatted FC Issues.
// @author       Matt Carter <m@ttcarter.com>
// @match        https://freedcamp.com/*
// @grant        none
// @see          https://github.com/MomsFriendlyDevCo/FC-Copy
// ==/UserScript==

(function() {
	'use strict';
	function fcCopyReference() {
		if (!$('.item-header-group .number_li .bt_color_box').length) return alert('Cannot find FreedCamp issue within page');

		var html = '<div>'
			+ '<a href="' + window.location.href + '">'
				+ $('.item-header-group .number_li .bt_color_box').text()
			+ '</a>'
			+ ' - '
			+ $('.item-title-group .bt_view_title').text()
		+ '</div>';

		navigator.clipboard.write([
			new ClipboardItem({
				'text/plain': new Blob([$(html).text()], {type: 'text/plain'}),
				'text/html': new Blob([html], {type: 'text/html'}),
			})
		]);
	}

	if (!$('.item-header-group .number_li .bt_color_box').length) return; // Not a FC issue page

	$('<a class="btn">Copy</a>')
		.css('height', '37px')
		.on('click', fcCopyReference)
		.prependTo($('.item-title-group .prev_next_buttons'))

})();
