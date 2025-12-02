/*global QUnit*/

sap.ui.define([
	"com/employee/empproject/controller/empView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("empView Controller");

	QUnit.test("I should test the empView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
