/* eslint-env node */

const EngineAddon = require('ember-engines/lib/engine-addon');
const AtImport = require('postcss-import');

module.exports = EngineAddon.extend({
    name: 'registries',

    lazyLoading: {
        enabled: true,
    },

    isDevelopingAddon() {
        return true;
    },

    cssModules: {
        headerModules: [
            'registries/styles/headers',
            'registries/styles/bootstrap',
        ],
        plugins: {
            before: [
                AtImport({
                    // Broccoli does weird things, manually add node_modules
                    path: `${process.cwd()}/node_modules`,
                    // Don't inline any imports that reference this application
                    // filter: path => !/^app|^registries/.test(path),
                    filter: path => /\.(scss|css|sass)$/.test(path),
                }),
            ],
        },
    },

    'ember-font-awesome': {
        includeFontAwesomeAssets: false,
    },

    'ember-bootstrap': {
        importBootstrapFont: false,
        importBootstrapCSS: false,
    },

    included(app, ...args) {
        this._super(app, ...args);

        this.import('node_modules/immutable/dist/immutable.js', {
            using: [
                { transformation: 'amd', as: 'immutable' },
            ],
        });

        this.import('node_modules/intersection-observer/intersection-observer.js', {
            using: [
                { transformation: 'amd', as: 'intersection-observer' },
            ],
        });

        this.import('node_modules/stickybits/dist/stickybits.js', {
            using: [
                { transformation: 'amd', as: 'stickybits' },
            ],
        });
    },
});
