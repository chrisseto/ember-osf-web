import { layout, tagName } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import Component from '@ember/component';
import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

@tagName('')
@layout(template)
export default class NavLink extends Component {
    static positionalParams = ['icon', 'label'];

    // TODO data-test stuff

    icon!: string;
    label!: string;
    count?: number;

    active: boolean = defaultTo(this.active, false);
    collapsed: boolean = defaultTo(this.collapsed, false);
    showSubmenu: boolean = defaultTo(this.showSubmenu, false);

    @computed('count')
    get hasCount() {
        return this.count !== undefined;
    }

    @computed('showSubmenu')
    get expandIcon() {
        return this.showSubmenu ? 'caret-up' : 'caret-down';
    }

    onclick() {
        this.set('showSubmenu', !this.showSubmenu);
    }

    @action
    clicked() {
        this.onclick();
    }
}
