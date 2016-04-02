'use strict';

System.register('santiagobiali/logo/components/LogoSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  var SettingsModal, LogoSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      LogoSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(LogoSettingsModal, _SettingsModal);

        function LogoSettingsModal() {
          babelHelpers.classCallCheck(this, LogoSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(LogoSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(LogoSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'LogoSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('santiagobiali-logo.admin.logo_settings.title');
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
                app.translator.trans('santiagobiali-logo.admin.logo_settings.logo_url')
              ),
              app.translator.trans('santiagobiali-logo.admin.logo_settings.path_instructions'),
              m('input', { className: 'FormControl', bidi: this.setting('santiagobiali-logo.logo_url') }),
              m('br', null),
              m(
                'label',
                null,
                app.translator.trans('santiagobiali-logo.admin.css_settings.title')
              ),
              app.translator.trans('santiagobiali-logo.admin.css_settings.css_instructions'),
              m('textarea', { className: 'FormControl', rows: '3', bidi: this.setting('santiagobiali-logo.logo_css') })
            )];
          }
        }]);
        return LogoSettingsModal;
      }(SettingsModal);

      _export('default', LogoSettingsModal);
    }
  };
});;
'use strict';

System.register('santiagobiali/logo/main', ['flarum/extend', 'flarum/app', 'santiagobiali/logo/components/LogoSettingsModal'], function (_export, _context) {
  var extend, app, LogoSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_santiagobialiLogoComponentsLogoSettingsModal) {
      LogoSettingsModal = _santiagobialiLogoComponentsLogoSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('santiagobiali-logo', function () {
        app.extensionSettings['santiagobiali-logo'] = function () {
          return app.modal.show(new LogoSettingsModal());
        };
      });
    }
  };
});