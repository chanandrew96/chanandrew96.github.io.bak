window.onscroll = function (ev) {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		// you're at the bottom of the page
		//alert("you're at the bottom of the page");
		bootbox.confirm({
			size: "small",
			title: "MyFirstPopUpMessage",
			message: "you're at the bottom of the page!",
			locale: "zh_TW",
			callback: function () {
				console.log("Alert Callback");
				bootbox.dialog({
					message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>',
					closeButton: false,
					backdrop: true,
					onEscape: true,
					closeButton: false,
					locale: "zh_TW"
				});
			}
		});
	}
};

window.onload = function () { alert("It's loaded!") }