(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


var init = function () {
  var data = {
    apiUrl: location.hostname == 'localhost' ? 'http://localhost:8000/admin' : location.protocol + '//' + location.hostname + location.pathname + 'admin',
    apiKey: 'fcfaf298e1e7ba680da3ca07af3dda',
    basePath: location.pathname.slice(0, -1),
    collections: {},
    regions: {}
  }

  if (window.location.search.indexOf('hint') > 0) {
    $(':not(:has(div)):contains("{{")').each(function () {
      var $this = $(this);
      var text = $this.text();
      if (text.indexOf('regions.') > 0 || text.indexOf('collections.') > 0) {
        var segments = text.replace('{{', '').replace('}}', '').split('.');
        var entityType = segments[0];
        var entityName = segments[1];
        if ($this.parents('.has-binding').length == 0) {
          $this.css('border', '1px dashed red').css('cursor', 'pointer');
          $this.attr('entity-type', entityType);
          $this.attr('entity-name', entityName);
          $this.addClass('has-binding');
          //$this.attr('vue-on:click', 'openCockpitPage(\'aaa\', \'bbb\')');
        }
        //console.log(entityType + ':' + entityName);
      }
    });

    $('body').on('click', '.has-binding', function () {
      var $this = $(this);
      var entityType = $this.attr('entity-type');
      var entityName = $this.attr('entity-name');
      window.open(data.apiUrl + '/' + entityType + '/form/' + entityName);
    });
  }  

  fetch(data.apiUrl + '/api/collections/listCollections?token=' + data.apiKey)
    .then(function (response) {
      return response.json()
    }).then(function (collectionNames) {
      data.collectionNames = collectionNames
      collectionNames.forEach(function (collectionName) {
        data.collections[collectionName] = [];
      });
      fetch(data.apiUrl + '/api/regions/listRegions?token=' + data.apiKey)
        .then(function (response) {
          return response.json()
        }).then(function (regionNames) {
          data.regionNames = regionNames;
          regionNames.forEach(function (regionName) {
            data.regions[regionName] = [];
          });
          new Vue({
            el: '#app',
            data: data,
            created: function () {
              this.fetchAllCollectionEntries();
              this.fetchAllRegionEntries();
            },
            methods: {
              openCockpitPage: function (entityType, entityName) {
                alert(entityType + ':' + entityName);
              },
              fetchAllRegionEntries: function () {
                var self = this;
                this.regionNames.forEach(function (regionName) {
                  self.fetchRegionEntries(regionName);
                });
                console.log(self);
              },
              fetchRegionEntries: function (regionName) {
                var self = this;
                fetch(data.apiUrl + '/api/regions/data/' + regionName + '?token=' + this.apiKey)
                  .then(function (response) {
                    return response.json()
                  }).then(function (json) {
                    self.regions[regionName] = json;
                  }).catch(function (ex) {
                    console.log('parsing failed', ex)
                  })
              },
              fetchAllCollectionEntries: function () {
                var self = this;
                this.collectionNames.forEach(function (collectionName) {
                  self.fetchCollectionEntries(collectionName);
                });
              },
              fetchCollectionEntries: function (collectionName) {
                var self = this;
                fetch(data.apiUrl + '/api/collections/get/' + collectionName + '?token=' + this.apiKey)
                  .then(function (response) {
                    return response.json()
                  }).then(function (json) {
                    self.collections[collectionName] = json.entries;
                  }).catch(function (ex) {
                    console.log('parsing failed', ex)
                  })
              }
            }
          })
        })
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
}

init();



