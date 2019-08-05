import { Pipe, PipeTransform } from '@angular/core';

import { Post } from './post';

@Pipe({name: 'postSort'})
export class PostSortPipe implements PipeTransform {
    transform(values: Post[], order?: string) {
        if (values) {
            values.sort((first: Post, second: Post) => {
                if (first.postId < second.postId) {
                    return order === 'asc' ? 1 : -1;
                } else if (first.postId > second.postId) {
                    return order === 'des' ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }
        return values;
    }
}
