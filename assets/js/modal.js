$(document).ready(() => {
	$('[data-modal-open]').on('click',(e) => {
		var modalSelector = $(e.target).attr('data-modal-open');
		var modal = $('[data-modal="' + modalSelector + '"]')
		modal.css('display', 'block')
	})

	$(window).on('click', (event) => {
	    if ($(event.target).hasClass('modal')) {
	        $(event.target).css('display', 'none');
	    }
	})

	$('.modal .close').on('click', (event) => {
	    $(event.target).parents('.modal').css('display', 'none');
	    $('iframe').each((index, elem) => {
	    	oldSrc = $(elem).attr('src');
	    	$(elem).attr('src', '');
	    	$(elem).attr('src', oldSrc);
	    }) 
	})
})