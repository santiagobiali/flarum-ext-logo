import SettingsModal from 'flarum/components/SettingsModal';

export default class LogoSettingsModal extends SettingsModal {
  className() {
    return 'LogoSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('santiagobiali-logo.admin.logo_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('santiagobiali-logo.admin.logo_settings.logo_url')}</label>
        {app.translator.trans('santiagobiali-logo.admin.logo_settings.path_instructions')}
        <input className="FormControl" bidi={this.setting('santiagobiali-logo.logo_url')}/>
        <br/>
        <label>{app.translator.trans('santiagobiali-logo.admin.css_settings.title')}</label>
        {app.translator.trans('santiagobiali-logo.admin.css_settings.css_instructions')}
        <textarea className="FormControl" rows="3" bidi={this.setting('santiagobiali-logo.logo_css')}/>
      </div>
    ];
  }
}
