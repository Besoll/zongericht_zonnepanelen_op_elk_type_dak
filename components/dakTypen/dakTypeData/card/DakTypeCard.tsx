import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card" 
import Image from 'next/image'
import Link from 'next/link'

import dynamic from 'next/dynamic'
const DownloadsIcon = dynamic (() => import('@/components/icons/DownloadsIcon'))
const ArrowBlue = dynamic (() => import('@/components/icons/ArrowBlue'))


interface Props {
    title: string;
    shortDescription: string;
    image: string;
    views: number;
    schouwingLink: string;
    slug: string;
}

const DakTypeCard = ({ title, image, shortDescription, views, schouwingLink, slug }: Props) => {
  return (
    <Card className="w-full max-w-fit px-5 py-5 ">
        <Link href={`/daktypen/${slug}`}>
            <CardHeader className='flex-center flex-col gap-2.5 !p-0 h-fit w-full'>
                    <Image 
                        src={image}
                        alt={title}  
                        width={384}
                        height={384}
                        className="h-full rounded-md object-cover max-h-[220px]"
                        loading='lazy'
                    />
                <CardTitle className='text-primary paragraph-semibold line-clamp-1 w-full text-left capitalize'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardDescription className='text-brand_original_main '>
                {shortDescription}
            </CardDescription>
        </Link>
        <CardContent className='flex flex-row xs:flex-between mt-4 p-4 border'>            
            <div className='xs:flex hidden flex-row body-medium gap-1.5 text-black'>
                <DownloadsIcon />
                {views}
            </div>
            <Link 
                href={schouwingLink} 
                className='flex-center text-gradient_green-orange gap-1.5'
            >
                Schouwing aanvragen
                <ArrowBlue />            
            </Link>
        </CardContent>
    </Card>
  )
}

export default DakTypeCard