(function registerElement() {

	Polymer({
		is: 'forge-repainter',

		created: onElementCreated,
		attached: onElementAttached,
		ready: onElementReady,
		detached: onElementDetached,

		properties: {
		},

		listeners: {
			'repaint-document': onReloadWindow
		}
	});

	function onElementCreated() {

	}

	function onElementAttached() {

	}

	function onElementReady() {

	}

	function onElementDetached() {

	}

	function onReloadWindow(event) {
		console.log('Repaint Requested');
	}

}) ();
