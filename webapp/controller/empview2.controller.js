sap.ui.define(['sap/ui/core/mvc/Controller',
], (Controller) => {
   "use strict";
   
   return Controller.extend("com.employee.empproject.controller.empview2",{
    onInit(){
        this.getOwnerComponent().getRouter().getRoute("Routeempview2").attachPatternMatched(this.onPatternMatched,this);
        // this.getView().byId("sf2").bindElement("/EmployeeSet('"+empid+"')");

    },
    onPatternMatched(oEvent){
        var empid = oEvent.getParameter("arguments").key;
        if(empid === "newemp"){
            

        }


        this.getView().bindElement("/EmployeeSet('" + empid + "')");
    }
   });

});