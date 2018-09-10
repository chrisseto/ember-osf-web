import { layout } from '@ember-decorators/component';
import Component from '@ember/component';
import { localClassName, localClassNames } from 'ember-osf-web/decorators/css-modules';
import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

@layout(template)
@localClassNames('Container')
export default class NavLink extends Component {
    static positionalParams = ['icon', 'label'];

    // TODO data-test stuff

    icon!: string;
    label!: string;
    collapsed: boolean = defaultTo(this.collapsed, false);

    @localClassName('Active')
    active: boolean = defaultTo(this.active, false);
}
