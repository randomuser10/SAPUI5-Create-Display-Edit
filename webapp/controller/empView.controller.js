sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "com/employee/empproject/model/formatter",
    "sap/ui/export/Spreadsheet"
], (Controller, Fragment, Filter, formatter, Spreadsheet) => {
    "use strict";
    // "com.employee.empproject.controller.empView"
    return Controller.extend("com.employee.empproject.controller.empView", {
        f: formatter,
        onInit() {
        },
        onF4HelpId() {
            if (!this.oDialog) {
                this.oDialog = sap.ui.xmlfragment(this.getView().getId(), "com.employee.empproject.view.empView", this);

                this.getView().addDependent(this.oDialog);

            }
            this.oDialog.open();
        },
        onF4HelpName() {
            if (!this.oDialog) {
                this.oDialog = sap.ui.xmlfragment(this.getView().getId(), "com.employee.empproject.view.empView", this);
                this.getView().addDependent(this.oDialog);
            }
            this.oDialog.open();

        },
        onDlgClose() {
            this.oDialog.close();
        },
        onDlgSelect(oEvent) {
            var empId = oEvent.getSource().getBindingContext().getProperty("Empid");
            var empName = oEvent.getSource().getBindingContext().getProperty("Empname")
            this.getView().byId("ip1").setValue(empId);
            this.getView().byId("ip2").setValue(empName);
            var aFilter = [];

            var sEmpId = this.getView().byId("ip1").getValue();

            if (sEmpId !== "") {
                aFilter.push(new Filter("Empid", "EQ", sEmpId));
            }


            var oTable = this.getView().byId("table2").getBinding("items").filter(aFilter);
            this.oDialog.close();

        },
        onGo() {
            var aFilter = [];

            var sEmpId = this.getView().byId("ip1").getValue();
            if (sEmpId !== "") {
                aFilter.push(new Filter("Empid", "EQ", sEmpId));
            }

            var sEmpName = this.getView().byId("ip2").getValue();
            if (sEmpName !== "") {
                aFilter.push(new Filter("Empname", "EQ", sEmpName));

            }


            var date_s = this.getView().byId("dp").getDateValue();
            date_s = formatter.formatDateFilter(date_s);


            if (date_s !== "") {
                aFilter.push(new Filter("Doj", "EQ", date_s));
            }


            var oTable = this.getView().byId("table2").getBinding("items").filter(aFilter);

        },
        onReset() {
            this.getView().byId("table2").getBinding("items").filter([]);
            this.getView().byId("ip1").setValue(" ");
            this.getView().byId("ip2").setValue(" ");
            this.getView().byId("dp").setValue(" ");
        },
        onExport() {

            var aCols, oRowBinding, oSettings, oSpreadSheet;
            oRowBinding = this.getView().byId('table2').getBinding('items');
            aCols = [
                    {
                        label: 'Employee ID',
                        property: 'Empid'
                    },
                    {
                        label: 'Employee Name',
                        property: 'Empname'
                    },
                    {
                        label: 'Designation',
                        property: 'Desig'
                    },
                    {
                        label: 'Skill',
                        property: 'Skill'
                    },
                    {
                        label: 'Email',
                        property: 'Email',
                    },
                    {
                        label: 'Phone',
                        property: 'Phone'
                    },
                    {
                        label: 'Salary',
                        property: 'Salary',
                        type: 'Number',
                        delimiter: true,
                        scale: 2
                    },
                    {
                        label: 'Date of Joining',
                        property: 'Doj',
                        type: 'Date',
                        format: 'dd-MM-yyyy'
                    },
                    {
                        label: 'Rating',
                        property: 'Rating'
                    },
                    {
                        label: 'Status',
                        property: 'Status'
                    }

            ]
            oSettings = {
                workbook: {
                    columns: aCols
                },
                dataSource: oRowBinding,
                filename: 'Employee.xslx',
                worker: true
            };
            oSpreadSheet = new Spreadsheet(oSettings);
            oSpreadSheet.build().finally(() => oSpreadSheet.destroy());

        },
        onItemSelect(){
            this.getView().byId()
        },
        onSelect(oEvent){
            var empid = oEvent.getSource().getBindingContext().getProperty("Empid");
            // this.getView().byId("sf2").bindElement("/EmployeeSet('"+empid+"')");
            this.getOwnerComponent().getRouter().navTo("Routeempview2",{
                key:empid
            });


        }
    });
});