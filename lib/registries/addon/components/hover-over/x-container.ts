import { layout } from '@ember-decorators/component';
import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

@layout(hbs`{{yield}}`)
export default class Container extends Component {
}
