sap.ui.define([],()=>{
    "use strict";

    return { 
        
        formatDate(Doj){
        var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                pattern: "dd-MM-yyyy"
        }, sap.ui.getCore().getConfiguration().getLocale());
        return oDateFormat.format(Doj); 
            
        },
        formatDateFilter(Doj){
            var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                pattern: "yyyy-MM-dd"
            }, sap.ui.getCore().getConfiguration().getLocale());
            return oDateFormat.format(Doj);
        }
    };
});