System.register('santiagobiali/logo/main', ['flarum/extend', 'flarum/app'], function (_export) {
    'use strict';

    var extend, app;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {

            app.initializers.add('santiagobiali-logo', function () {
                document.getElementById("home-link").innerHTML = "<img src='" + app.forum.attribute('logo_url') + "' class='santiagobiali-logo'>";
            }, -100);
        }
    };
});