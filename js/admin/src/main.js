import { extend } from 'flarum/extend';
import app from 'flarum/app';

import LogoSettingsModal from 'santiagobiali/logo/components/LogoSettingsModal';

app.initializers.add('flarum-logo', () => {
  app.extensionSettings['santiagobiali-logo'] = () => app.modal.show(new LogoSettingsModal());
});
