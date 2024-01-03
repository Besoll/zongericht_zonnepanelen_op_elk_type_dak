import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card" 
import Image from 'next/image'
import Link from 'next/link'


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
    <Card className="w-full max-w-fit border-0 !bg-transparent xs:max-w-[356px]">
        <Link href={`/daktypen/${slug}`}>
            <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
                <div className='h-fit w-full'>
                    <Image 
                        src={image}
                        alt={title}  
                        width={384}
                        height={220}
                        className="h-full rounded-md object-cover max-h-[220px]"
                        loading='lazy'
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
        <CardContent className='flex flex-col xs:flex-row xs:flex-between mt-4 p-4 border'>            
            <div className='xs:flex-center flex xs:flex-row body-medium xs:gap-1.5 text-black'>
                <Image 
                    src='/downloads.svg'
                    alt='downloads icon'
                    width={20}
                    height={20}
                    loading='lazy'
                />
                {views}
            </div>
            <Link 
                href={schouwingLink} 
                className='flex-center text-gradient_green-orange xs:body-semibold xs:gap-1.5'
            >
                Schouwing aanvragen
                <Image 
                    src='/icons/arrow-blue.svg'
                    alt='arrow icon'
                    width={12}
                    height={10}
                    loading='lazy'
                />            
            </Link>
        </CardContent>
    </Card>
  )
}

export default DakTypeCard