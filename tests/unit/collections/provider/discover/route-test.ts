import { setupEngineTest } from 'ember-osf-web/tests/helpers/engines';
import { module, test } from 'qunit';

module('Unit | Route | collections/provider/discover', hooks => {
    setupEngineTest(hooks, 'collections');

    test('it exists', function(assert) {
        const route = this.owner.lookup('route:provider/discover');
        assert.ok(route);
    });
});
