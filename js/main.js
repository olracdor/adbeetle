$(function ($) {

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 15,
		percentPosition: true
	
	});

	$(window).resize(function () {
		adjustMargins();
	});

	$grid.imagesLoaded().progress(function () {
		$grid.masonry('layout');
	});

	function adjustMargins() {
		var margins = 0;
		var width = $(window).width();
		var gridWidth = 250;
		var gap = 15;
		var howmany = 0;
		var computedWidth = 0;
		var menuHeight = 0;
		if (width <= 600) {
			gridWidth = 180;
		}

		howmany = Math.floor(width / (gridWidth + gap));
		gap = gap * (howmany - 1);

		computedWidth = (gridWidth * howmany) + gap;
		margins = (width - ((computedWidth))) / 2;

		$(".grid").width(computedWidth + "px");
		$('.grid').css('margin-left', margins + "px");
		$('.grid').css('margin-right', margins + "px");

	}

	function init() {
		var $elem = $([pgHdrGI(), about(), newAdd(), search(), sndMsg(), leasing(), health(), music(), vehicles(), article(), money(), food(), travel(), coffee(),gaming()]);
		$grid
			.append($elem)
			.masonry('appended', $elem);
		$grid.masonry('layout');
	}

	function about() {

		return articleGI('New to Adbeetle?', "Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular na" +
			"modelo simula pa noong 1500s, noong may isang di kilalang manlilimbag and kumuha ng galley ng type at ginulo" +
			"ang pagkaka-ayos");
	}
	function gaming() {

		return catBtnGI('Gaming', 'background-mid-blue font-white', 'fa-gamepad');
	}
	function coffee() {

		return catBtnGI('Coffee/Tea', 'background-brown font-white', 'fa-coffee');
	}
	function travel() {

		return catBtnGI('Travel', 'background-lighter-blue font-white', 'fa-plane');
	}
	function food() {

		return catBtnGI('Food', 'background-yellow font-white', 'fa-cutlery');
	}
	function newAdd() {

		return btnGI('Your ad here', 'background-white font-grey', 'fa-plus-circle');
	}
	function health() {

		return catBtnGI('Health', 'background-green font-white', 'fa-heartbeat');
	}
	function search() {

		return btnGI('Search', 'background-light-black font-white', 'fa-search');
	}
	function sndMsg() {

		return btnGI('Send us a message', 'background-light-black font-white', 'fa-paper-plane');
	}
	function leasing() {

		return catBtnGI('Leasing', 'background-light-fuschia font-white', 'fa-home');
	}
	function music() {

		return catBtnGI('Music', 'background-maroon font-white', 'fa-music');
	}
	function vehicles() {

		return catBtnGI('Vehicles', 'background-lame-green font-white', 'fa-car');
	}
	function article() {

		return catBtnGI('Article', 'background-blue-grey font-white', 'fa-newspaper-o');
	}
	function money() {

		return catBtnGI('Make Money', 'background-money-green font-white', 'fa-money');
	}
	function pgHdrGI() {
		var e = document.createElement('div');
		var hdlc = document.createElement('div');
		var i = document.createElement('i');
		var hdl = document.createElement('span');
		var hdlCtrlc = document.createElement('div');
		var iBtn = document.createElement('i');
		e.className = 'grid-item bold no-padding grid-item-large background-white smallgantor font-black ';
		hdlc.className = 'headline-container font-grey';

		i.className = 'fa fa-ellipsis-h font-maroon menu-icon';
		hdl.className = 'headline';
		hdlCtrlc.className = 'pull-right';
		iBtn.className = 'fa fa-plus-circle font-maroon menu-icon';

		$(hdlCtrlc).append(iBtn);
		$(hdlCtrlc).append(' your headline');
		$(hdlc).append(hdlCtrlc);
		$(hdl).append('Welcome to Adbeetle! Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset.');
		$(hdlc).append(i);
		$(hdlc).append(hdl);

		$(e).append(hdlc);
		
		return e;
	}

	function catBtnGI(lbl, cls, icn) {
		var e = document.createElement('div');
		e.className = 'grid-item grid-menu-item border-curved-10 padding-15 ' + cls;
		$(e).append(iconGIx4(icn));
		$(e).append(lblGI(lbl));
		return e;
	}

	function btnGI(lbl, cls, icn) {
		var e = document.createElement('div');
		e.className = 'grid-item border-curved-10 padding-15 ' + cls;
		$(e).append(iconGIx5(icn));
		$(e).append(lblGI(lbl));
		return e;
	}

	function articleGI(hdr, txt) {
		var e = document.createElement('div');
		e.className = 'grid-item ad-item';
		$(e).append(articleHdrGI(hdr));
		$(e).append(txt);
		return e;
	}

	function articleHdrGI(hdr) {
		var e = document.createElement('div');
		e.className = 'bold smallgantor font-light-black';
		$(e).append(hdr);
		return e;
	}

	function iconGIx5(icn) {
		var e = document.createElement('div');
		var i = document.createElement('i');
		e.className = 'font-center grid-menu-item-icon';
		i.className = 'fa ' + icn + ' fa-5x';
		$(e).append(i);
		return e;
	}

	function iconGIx4(icn) {
		var e = document.createElement('div');
		var i = document.createElement('i');
		e.className = 'font-center grid-menu-item-icon';
		i.className = 'fa ' + icn + ' fa-4x';
		$(e).append(i);
		return e;
	}

	function lblGI(lbl) {
		var e = document.createElement('div');
		e.className = 'bold smallgantor';
		$(e).append(lbl);
		return e;
	}

	adjustMargins();
	init();
});

