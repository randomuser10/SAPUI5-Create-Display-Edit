/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/employee/empproject/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
