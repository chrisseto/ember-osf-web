import { attribute, layout, tagName } from '@ember-decorators/component';
import { macro } from '@ember-decorators/object/computed';
import Component from '@ember/component';
import toStr from 'ember-awesome-macros/to-str';
import { localClassNames } from 'ember-osf-web/decorators/css-modules';
import defaultTo from 'ember-osf-web/utils/default-to';
import hbs from 'htmlbars-inline-precompile';
import styles from './styles';


const toString = macro(toStr);

@layout(hbs`
    {{yield}}
`)
@tagName('ul')
@localClassNames('Links')
export default class Links extends Component {
    styles = styles;

    @attribute 'data-test-links' = true;
    @toString('collapsed') 'data-test-collapsed'!: string;

    collapsed: boolean = defaultTo(this.collapsed, false);
}
