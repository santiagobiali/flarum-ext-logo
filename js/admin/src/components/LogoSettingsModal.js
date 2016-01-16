import SettingsModal from 'flarum/components/SettingsModal';

export default class LogoSettingsModal extends SettingsModal {
  className() {
    return 'LogoSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-logo.admin.logo_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('flarum-logo.admin.logo_settings.logo_url')}</label>
        {app.translator.trans('flarum-logo.admin.logo_settings.path_instructions')}
        <input className="FormControl" bidi={this.setting('flarum-logo.logo_url')}/>
      </div>
    ];
  }
}
