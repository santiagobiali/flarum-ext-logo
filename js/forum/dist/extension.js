System.register('flarum/logo/main', ['flarum/extend', 'flarum/app', 'flarum/Model'], function (_export) {
  'use strict';

  var extend, app, Model;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumModel) {
      Model = _flarumModel['default'];
    }],
    execute: function () {

      app.initializers.add('flarum-logo', function () {
        //var logo  = app.forum.attribute('logo_url');
        //alert(app.forum.attribute('logo_url'));
        //document.getElementById("home-link").innerHTML = app.forum.attribute('logo_url');
      });
    }
  };
});