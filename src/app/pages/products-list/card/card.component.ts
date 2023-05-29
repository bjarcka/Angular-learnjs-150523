import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product = productMock;

    onClick(event: Event) {
        event.stopPropagation();
        /* eslint-disable no-console */
        console.log('click');
        /* eslint-enable no-console */
    }
}
