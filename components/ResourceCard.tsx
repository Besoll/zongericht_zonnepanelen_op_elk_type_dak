import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card" 

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent xs:max-w-[356px]">
        <Link href={downloadLink}>
            <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
                <div className='h-fit w-full'>
                    <Image 
                        src={image}
                        alt={title}  
                        width={384}
                        height={440}
                        className="h-full rounded-md object-cover"
                    />
                </div>

                <CardTitle className='text-black paragraph-semibold line-clamp-1 w-full text-left'>
                    {title}
                </CardTitle>
            </CardHeader>
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
                href={downloadLink} 
                className='flex-center text-gradient_purple-blue body-semibold gap-1.5'
            >
                Download Now
                <Image 
                    src='/arrow-blue.svg'
                    alt='arrow icon'
                    width={13}
                    height={10}
                />            
            </Link>
        </CardContent>
    </Card>
  )
}

export default ResourceCard