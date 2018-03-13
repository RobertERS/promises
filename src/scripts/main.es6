const scripts = [
    'lib/promise.min.js',
    'scripts/load-content.js',
    'scripts/app.js',
    'scripts/dom.js'
];

document.addEventListener('DOMContentLoaded', () => {
    function addScripts(uris, callback) {
        if (!uris instanceof Array || uris.length < 1) {
            return false;
        }

        function add(i) {
            var uri = uris[i],
                s = document.createElement('script');

            s.src = uri;

            document.head.appendChild(s);

            if (uris[++i]) {
                s.onload = () => { add(i) }
            } else if (typeof callback === 'function') {
                s.onload = callback;
            }
        };

        add(0);
    }

    addScripts(scripts, () => console.log('All scripts are loaded.'));
});

