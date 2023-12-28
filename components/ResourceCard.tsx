import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card" 


interface Props {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    downloadNumber: number;
    schouwingLink: string;
}

const ResourceCard = ({ id, title, image, shortDescription, downloadNumber, schouwingLink }: Props) => {
    
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent xs:max-w-[356px]">
        <Link href={`/resource/${id}`}>
            <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
                <div className='h-fit w-full'>
                    <Image 
                        src={image}
                        alt={title}  
                        width={384}
                        height={250}
                        className="h-full rounded-md object-cover"
                    />
                </div>

                <CardTitle className='text-primary paragraph-semibold line-clamp-1 w-full text-left capitalize'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardDescription className='text-brand_original_main '>
                {shortDescription}
            </CardDescription>
        </Link>
        <CardContent className='flex-between mt-4 p-4'>            
            <div className='flex-center body-medium gap-1.5 text-black'>
                <Image 
                    src='/downloads.svg'
                    alt='downloads icon'
                    width={20}
                    height={20}
                />
                {downloadNumber}
            </div>
            <Link 
                href={schouwingLink} 
                className='flex-center text-gradient_green-orange body-semibold gap-1.5'
            >
                Schouwing aanvragen
                <Image 
                    src='/arrow-blue.svg'
                    alt='arrow icon'
                    width={12}
                    height={10}
                />            
            </Link>
        </CardContent>
    </Card>
  )
}

export default ResourceCard