export interface Ipage{
    'ContentId':number,
    'ContentType':string,
    'ContentTitle':string,
    'ContentUrl':string,
    'isPublished':number,
    'ContentMeta':string,
    'Content':string,
    'Category':string,
    'FeaturedImage':string,
    'Content_more':[]
    

}


export interface IHome{
    'banner':[],
    'homepageContent':[],
    'course':[],
    'partners':[],
}