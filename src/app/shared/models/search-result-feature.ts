export type SearchResultFeatures = SearchResultFeature[];

export class SearchResultFeature {
    icon: string;
    title: string;

    constructor(init?: Partial<SearchResultFeature>) {
        Object.assign(this, init);
    }
}
