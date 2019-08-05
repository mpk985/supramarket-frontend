import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item';

@Pipe({name: 'itemSort'})
export class ItemSortPipe implements PipeTransform {
    transform(values: Item[], order?: string) {
        if (values) {
            values.sort((first: Item, second: Item) => {
                if (first.inventoryId < second.inventoryId) {
                    return order === 'asc' ? 1 : -1;
                } else if (first.inventoryId > second.inventoryId) {
                    return order === 'des' ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }
        return values;
    }
}
