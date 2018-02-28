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

new Vue({
  el: '#content',
  data: {
    apiKey: 'fcfaf298e1e7ba680da3ca07af3dda',
    firstName: 'Dirk',
    lastName: 'Diggler',
    street: 'Sternstraße 5d',
    zipCode: '20357',
    city: 'Hamburg',
    phone: '(040) 555 123 456',
    email: 'name@example.com',
    careerStages: []
  },
  created: function () {
    this.fetchAllCollections(this.apiKey);
    //this.fetchCollectionEntries('career_stages', self.apiKey, 'careerStages');
  },
  methods: {
    fetchCollectionEntries: function (collectionName, apiKey) {
      var self = this;
      fetch('http://localhost:8000/admin/api/collections/get/' + collectionName + '?token=' + apiKey)
      .then(function (response) {
        return response.json()
        }).then(function (json) {
          self[collectionName] = json.entries;
          console.log(self);
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })      
    },
    fetchAllCollections: function (apiKey) {
      var self = this;
      fetch('http://localhost:8000/admin/api/collections/listCollections?token=' + apiKey)
      .then(function (response) {
        return response.json()
        }).then(function (collections) {
          console.log(collections);
          collections.forEach(function (collectionName) {
            self.fetchCollectionEntries(collectionName, apiKey);
          });
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })      
    }
  }

})

