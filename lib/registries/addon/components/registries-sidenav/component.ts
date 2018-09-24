import { attribute, layout, tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import Component from '@ember/component';
import { localClassNames, localClassName } from 'ember-osf-web/decorators/css-modules';
import defaultTo from 'ember-osf-web/utils/default-to';
import { conditional, raw, toStr } from 'registries/macros';
import styles from './styles';
import template from './template';

@layout(template)
@tagName('div')
@localClassNames('SideNav')
export default class SideNav extends Component {
    styles = styles;

    @attribute 'data-test-sidenav' = true;
    @attribute role = 'navigation';
    @toStr('collapsed')'data-test-collapsed'!: string;

    @conditional('collapsed', raw('chevron-right'), raw('chevron-left'))
    togglerIcon!: string;

    @conditional('collapsed', raw('Show'), raw('Hide'))
    togglerText!: string;

    @localClassName('SideNav--Collapsed')
    collapsed: boolean = defaultTo(this.collapsed, false);

    @action
    toggle() {
        this.set('collapsed', !this.collapsed);
    }
}
