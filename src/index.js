import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContentRange from 'http-range/lib/content-range';
import { Range } from 'http-range';

ContentRange.prototype.parse('bytes 0-49/50');
new ContentRange('bytes', '0-49', '50').toString();

Range.prototype.parse('bytes=0-49');
new Range('bytes', '0-49');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

fetch('https://audius-metadata-3.figment.io/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',
{
    method: 'GET'

})
.then(function (res) {
    return res.json();
}).then(function (body) {
    console.log(body);
});

reportWebVitals();
