// OVERRIDE DE STATUSGRIDEVENTS BEHAVIORS


var StatusgridEvents = (function(events) {
    
  var singleAdvancedWindow = null;
  
  function showAdvancedSearch() {
    console.log("NEED IMPLEMENT SHOW ADVANCED SEARCH LIKE STATUSGRID");
      
    var viewmodel = Ext.ComponentQuery.query("#gridview").reduce(function(result, cmp) { return cmp.getViewModel(); }, null);

    if (!singleAdvancedWindow) {
        singleAdvancedWindow = Ext.create("EventLog.view.filter.eventlog", {
            modal: true,
            viewModel: viewmodel,
            renderTo: Ext.getBody()
        });
    }
      
    singleAdvancedWindow.show();
  }

  return Ext.apply({}, events, {
      showAdvancedSearch: showAdvancedSearch,
      singleAdvancedWindow: function() {
          return singleAdvancedWindow;
      }
  });
})(StatusgridEvents);

function adjustIE10Style() {
    console.log("NEED IMPLEMENT AJUST IE 10 STYLE");
}

function createYestardayDate() {
    var dt = new Date();
    return dt.setDate(dt.getDate() - 1);
}