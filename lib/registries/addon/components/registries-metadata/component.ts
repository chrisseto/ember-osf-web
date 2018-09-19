import { layout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import template from './template';

@tagName('')
@layout(template)
export default class NavBar extends Component {
}
