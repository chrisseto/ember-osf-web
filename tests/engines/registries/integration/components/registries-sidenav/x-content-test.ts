import { render } from '@ember/test-helpers';
import { setupEngineRenderingTest } from 'ember-osf-web/tests/helpers/engines';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | registries-sidenav/x-content', hooks => {
    setupEngineRenderingTest(hooks, 'registries');

    test('it renders when not collapsed', async function(assert) {
        await render(hbs`
            {{#registries-sidenav/x-content}}
                <h1>This is my content!</h1>
            {{/registries-sidenav/x-content}}
        `);

        assert.dom('[data-test-content]').exists('Content container renders');
        assert.dom('[data-test-content][data-test-collapsed="false"]').exists('Content is not collapsed by default');
        assert.dom('[data-test-content] > h1').hasText('This is my content!');
        assert.dom('[data-test-content] > h1').exists('Block Content is yielded');
    });

    test('it does not render when collapsed', async function(assert) {
        await render(hbs`
            {{#registries-sidenav/x-content collapsed=true}}
                <h1>This is my content!</h1>
            {{/registries-sidenav/x-content}}
        `);

        assert.dom('[data-test-content]').exists('Content container renders');
        assert.dom('[data-test-content][data-test-collapsed="true"]').exists('Collapses when collapsed=true');
        assert.dom('[data-test-content] > h1').doesNotExist('Block Content is not yielded when collapsed');
    });
});
