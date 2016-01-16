import { extend } from 'flarum/extend';
import app from 'flarum/app';

import LogoSettingsModal from 'flarum/logo/components/LogoSettingsModal';

app.initializers.add('flarum-logo', () => {
  app.extensionSettings['flarum-logo'] = () => app.modal.show(new LogoSettingsModal());
});
