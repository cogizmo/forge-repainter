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
			'repaint-document': '_onRequestRepaint'
		},
		_onRequestRepaint: onRepaintRequested
	});

	function onElementCreated() {

	}

	function onElementAttached() {

	}

	function onElementReady() {

	}

	function onElementDetached() {

	}

	function onRepaintRequested(event) {
		console.log('Repaint Requested');
	}

}) ();
