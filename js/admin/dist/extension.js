System.register('santiagobiali/flarum/logo/components/LogoSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, LogoSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      LogoSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(LogoSettingsModal, _SettingsModal);

        function LogoSettingsModal() {
          babelHelpers.classCallCheck(this, LogoSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(LogoSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(LogoSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'LogoSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flarum-logo.admin.logo_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-logo.admin.logo_settings.logo_url')
              ),
              app.translator.trans('flarum-logo.admin.logo_settings.path_instructions'),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-logo.logo_url') })
            )];
          }
        }]);
        return LogoSettingsModal;
      })(SettingsModal);

      _export('default', LogoSettingsModal);
    }
  };
});;
System.register('santiagobiali/flarum/logo/main', ['flarum/extend', 'flarum/app', 'santiagobiali/flarum/logo/components/LogoSettingsModal'], function (_export) {
  'use strict';

  var extend, app, LogoSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_santiagobialiFlarumLogoComponentsLogoSettingsModal) {
      LogoSettingsModal = _santiagobialiFlarumLogoComponentsLogoSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('flarum-logo', function () {

        app.extensionSettings['santiagobiali-logo'] = function () {
          return app.modal.show(new LogoSettingsModal());
        };
      });
    }
  };
});