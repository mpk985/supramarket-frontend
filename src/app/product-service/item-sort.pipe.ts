import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({name: 'itemSort'})
export class ItemSortPipe implements PipeTransform {
    transform(values: Product[], order?: string) {
        if (values) {
            values.sort((first: Product, second: Product) => {
                if (first.updatedAt < second.updatedAt) {
                    return order === 'asc' ? 1 : -1;
                } else if (first.updatedAt > second.updatedAt) {
                    return order === 'des' ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }
        return values;
    }
}
