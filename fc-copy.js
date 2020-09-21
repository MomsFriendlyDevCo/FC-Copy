function fcCopyReference() {
	if (!$('.item-header-group .number_li .bt_color_box').length) return alert('Cannot find FreedCamp issue within page');

	var html = ''
		+ '<a href="' + window.location.href + '">'
			+ '<strong>'
				+ $('.item-header-group .number_li .bt_color_box').text()
			+ '</strong>'
		+ '</a>'
		+ ' - '
		+ $('.item-title-group .bt_view_title').text();

	var htmlBlob = new Blob([html], {type: 'text/html'});
	navigator.clipboard.write([new ClipboardItem({[htmlBlob.type]: htmlBlob})]);
}
