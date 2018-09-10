import { click, render } from '@ember/test-helpers';
import { setupEngineRenderingTest } from 'ember-osf-web/tests/helpers/engines';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | registries-sidenav', hooks => {
    setupEngineRenderingTest(hooks, 'registries');

    test('it renders', async function(assert) {
        await render(hbs`{{registries-sidenav}}`);

        assert.dom('[data-test-sidenav]').exists('SideNav container renders');
        assert.dom('[data-test-sidenav]>[data-test-content]').doesNotExist('Content must be rendered through a yield');
        assert.dom('[data-test-sidenav]>[data-test-links]').doesNotExist('Links must be rendered through a yield');
        assert.dom('[data-test-sidenav]>[data-test-toggle]').doesNotExist('Toggle must be rendered through a yield');
    });

    test('it yields', async function(assert) {
        await render(hbs`
            {{#registries-sidenav as |nav|}}
                {{nav.links}}
                {{nav.toggle}}
                {{nav.content}}
            {{/registries-sidenav}}
        `);

        assert.dom('[data-test-sidenav]').exists('SideNav container renders');
        assert.dom('[data-test-sidenav] > [data-test-content]').exists('Content should be rendered through a yield');
        assert.dom('[data-test-sidenav] > [data-test-links]').exists('Links should be rendered through a yield');
        assert.dom('[data-test-sidenav] > [data-test-toggle]').exists('Toggle should be rendered through a yield');
    });

    test('it toggles', async function(assert) {
        const children = ['links', 'toggle', 'content'];

        await render(hbs`
            {{#registries-sidenav as |nav|}}
                {{nav.links}}
                {{nav.toggle}}
                {{nav.content}}
            {{/registries-sidenav}}
        `);

        assert.dom('[data-test-sidenav][data-test-collapsed="false"]').exists('SideNav is not collapsed by default');

        for (const child of children) {
            assert.dom(
                `[data-test-sidenav] > [data-test-${child}][data-test-collapsed="false"]`,
            ).exists(`"${child}" component is expanded by default`);
        }

        await click('[data-test-sidenav] > [data-test-toggle]');

        assert.dom('[data-test-sidenav][data-test-collapsed="true"]').exists('SideNav is collapsed after toggle');

        for (const child of children) {
            assert.dom(
                `[data-test-sidenav] > [data-test-${child}][data-test-collapsed="true"]`,
            ).exists(`"${child}" component is collapsed after toggle`);
        }

        await click('[data-test-sidenav] > [data-test-toggle]');

        assert.dom('[data-test-sidenav][data-test-collapsed="false"]').exists('SideNav is expanded after toggle');

        for (const child of children) {
            assert.dom(
                `[data-test-sidenav] > [data-test-${child}][data-test-collapsed="false"]`,
            ).exists(`"${child}" component is expanded after toggle`);
        }
    });
});
