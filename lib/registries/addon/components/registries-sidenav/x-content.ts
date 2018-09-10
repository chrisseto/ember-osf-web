import { attribute, layout } from '@ember-decorators/component';
import { macro } from '@ember-decorators/object/computed';
import Component from '@ember/component';
import toStr from 'ember-awesome-macros/to-str';
import defaultTo from 'ember-osf-web/utils/default-to';
import hbs from 'htmlbars-inline-precompile';

const toString = macro(toStr);

@layout(hbs`
    {{#unless this.collapsed}}
        {{yield}}
    {{/unless}}
`)
export default class Content extends Component {
    @attribute 'data-test-content' = true;
    @toString('collapsed') 'data-test-collapsed'!: string;

    collapsed: boolean = defaultTo(this.collapsed, false);
}
