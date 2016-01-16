import { extend } from 'flarum/extend';
import app from 'flarum/app';

app.initializers.add('santiagobiali-logo', () => {
    document.getElementById("home-link").innerHTML = 
            "<img src='"+app.forum.attribute('logo_url')+"'>";
},-100);
