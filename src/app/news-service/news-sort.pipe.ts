import { Pipe, PipeTransform } from '@angular/core';

import { News } from './news';

@Pipe({name: 'newsSort'})
export class NewsSortPipe implements PipeTransform {
    transform(values: News[], order?: string) {
        if (values) {
            values.sort((first: News, second: News) => {
                if (first.newsId < second.newsId) {
                    return order === 'asc' ? 1 : -1;
                } else if (first.newsId > second.newsId) {
                    return order === 'des' ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }
        return values;
    }
}
