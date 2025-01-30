export interface INews {
    author: string;
    category: CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type SkeletonType = 'item' | 'banner';
export type DirectionType = 'row' | 'column';

export interface NewsApiResponse {
    news: INews[]; 
    page: number; 
    status: string;
}

export interface CategoriesApiResponse {
    categories: CategoryType[]; 
    description: string;
    status: string;
}

export interface IPaginationProps{  
    totalPages: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    handlePageClick: (page: number) => void;
    currentPage: number;
}

export type CategoryType = 
    | 'regional'
    | 'funny'
    | 'estate'
    | 'mobile'
    | 'security'
    | 'EE'
    | 'design'
    | 'gadgets'
    | 'medical'
    | 'celebrity'
    | 'energy'
    | 'auto'
    | 'review'
    | 'entrepreneur'
    | 'movie'
    | 'commodity'
    | 'television'
    | 'redundant'
    | 'education'
    | 'CS'
    | 'notsure'
    | 'music'
    | 'art'
    | 'environment'
    | 'economy'
    | 'culture'
    | 'travel'
    | 'crap'
    | 'academic'
    | 'fashion'
    | 'game'
    | 'food'
    | 'opinion'
    | 'health'
    | 'politics'
    | 'academia'
    | 'finance'
    | 'sports'
    | 'world'
    | 'entertainment'
    | 'science'
    | 'programming'
    | 'general'
    | 'business'
    | 'lifestyle'
    | 'technology';