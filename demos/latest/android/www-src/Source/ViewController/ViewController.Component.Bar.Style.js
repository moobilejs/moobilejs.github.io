/*
---

name: ViewController.Component.Bar.Style

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.Bar.Style

...
*/

ViewController.Component.Bar.Style = new Class({

	Extends: ViewController.Section,

	options: {
		style: 'default'
	},

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-bar-' + this.options.style + '-view.html');
	},

	viewDidLoad: function() {
		this.parent();
	},

	destroy: function() {
		this.parent();
	}

});