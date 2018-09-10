import { layout } from '@ember-decorators/component';
import Component from '@ember/component';
// import { localClassName, localClassNames } from 'ember-osf-web/decorators/css-modules';
import { localClassNames } from 'ember-osf-web/decorators/css-modules';
import defaultTo from 'ember-osf-web/utils/default-to';
import template from './template';

@layout(template)
@localClassNames('Container')
export default class HoverOver extends Component {
    // TODO data-test stuff


    // @localClassName('Container--Collapsed')
    collapsed: boolean = defaultTo(this.collapsed, false);
}
