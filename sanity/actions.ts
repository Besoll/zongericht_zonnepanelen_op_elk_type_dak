import { groq } from 'next-sanity'
import { readClient } from './lib/client'
import { buildQuery } from './utils';

interface GetResuourcesParams {
    query: string;
    category: string;
    page: string;
}


export const getResourcesPlaylist = async () => {
    try {
        const resources = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"]{
                _id,
                title,
                resources[0...6]->{
                    title,
                    shortDescription,
                    slug,
                    schouwingLink,
                    "image": poster.asset->url,
                    _id,
                    views,
                    categrory
                }
            }`
        )

        return resources;
    } catch (error) {
        console.log(error);
    }
}


export const getResourcesMore = async (params: GetResuourcesParams) => {
    const { query, category, page } = params;
    
    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page)
            })}{
                title,
                _id,
                paragraph,
                title1,
                description1,
                title2,
                description2,
                title3,
                description3,
                slug,
                schouwingLink,
                youTubeLink,  
                "image": poster.asset->url,
                "image2": poster2.asset->url,
                "image3": poster3.asset->url,
                views,
                categrory
            }`
        )

        return resources;
    } catch (error) {
        console.log(error);
    }
}


export const getResources = async (params: GetResuourcesParams) => {
    const { query, category, page } = params;
    
    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page)
            })}{
                title,
                _id,
                shortDescription,
                "image": poster.asset->url,
                slug,
                schouwingLink,
                views,
                categrory
            }`
        )

        return resources;
    } catch (error) {
        console.log(error);
    }
}