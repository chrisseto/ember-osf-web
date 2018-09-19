import { layout, tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import Component from '@ember/component';
import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

@tagName('')
@layout(template)
export default class PopoutMenu extends Component {
    expanded: boolean = defaultTo(this.expanded, false);

    @action
    toggle() {
        this.set('expanded', !this.expanded);
    }
}
