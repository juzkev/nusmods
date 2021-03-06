'use strict';

var $ = require('jquery');
var _ = require('underscore');
var App = require('../../app');
var Marionette = require('backbone.marionette');
var analytics = require('../../analytics');
var template = require('../templates/loading.hbs');
var Spinner = require('spin.js');

module.exports = Marionette.ItemView.extend({
  template: template,
  onShow: function() {
    var opts = {
      lines: 12, // The number of lines to draw
      length: 10, // The length of each line
      width: 4, // The line thickness
      radius: 16, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb or array of colors
      speed: 1.3, // Rounds per second
      trail: 52, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '50%', // Top position relative to parent
      left: '50%' // Left position relative to parent
    };
    var spinner = new Spinner(opts).spin();
    this.$('.js-nm-loading').html(spinner.el);
  }
});
