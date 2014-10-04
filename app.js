var phantom = require('phantom');

// Load phantom object
phantom.create(function(ph) {
  return ph.createPage(function(page) {
    return page.open("http://tilomitra.com/repository/screenscrape/ajax.html", function(status) {
      // Print the status of connection
      console.log("opened site? ", status);
      // Inject jquery so we can use it to grab stuff.  This is super awesome.
      page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
        //jQuery Loaded.
        //Wait 5 seconds for AJAX content to load on the page
        setTimeout(function() {
          return page.evaluate(function() {
            /*
              Get what you want from the page using jQuery.
              Populate an object with all the jQuery commands that you need and
              then return the object.
              Need to write a RSDB system for this
            */
            var h2Arr = [],
              pArr = [];
            $('h2').each(function() {
              h2Arr.push($(this).html());
            });
            $('p').each(function() {
              pArr.push($(this).html());
            });
            return {
              h2: h2Arr,
              p: pArr
            };
          }, function(result) {
            console.log(result);
            ph.exit();
          });
        }, 5000);
      });
    });
  });
});
