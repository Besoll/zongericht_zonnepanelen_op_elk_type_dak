import { AnimatePresence, motion } from 'framer-motion'
import ChevronDownIcon from '@/components/icons/ChevronDownIcon'


interface AccordionItems {
    title: string,
    subTitle: string,
    isOpen: any,
    setIsOpen: any,
    i: number
}


export default function AccordionBox(item: AccordionItems) {
    const expanded = item.i === item.isOpen

   return (
    <motion.div 
        className='flex flex-col shadow-inner rounded-xl border px-8 py-5 cursor-pointer max-w-lg w-full gradient_special'
        initial={false}
        onClick={() => item.setIsOpen(expanded ? false : item.i)}
    >
        <motion.header
            className='flex items-center justify-between px-5'>
            <div className='flex space-x-4 space-x-reverse items-center'>
            <span className={`${expanded ? "text-gradient_orange" : "text-gradient_green"}`}>{item.title}</span>
            </div>

            <motion.div
                className='flex'
                animate = {{
                    rotate: expanded ? 90 : 0,
                }}
            >
                <span className={`w-3 ${expanded ? "text-gradient_orange" : "text-gradient_green"}`}>
                <ChevronDownIcon /></span>
            </motion.div>

        </motion.header>
        <AnimatePresence initial={false}>
            {expanded && (
                <motion.div
                    key='content'
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    <div className='mt-4 px-5'>
                        <p className='text-base text-black-100'>
                            {item.subTitle}
                        </p>
                    </div>
                </motion.div>
            )

            }
        </AnimatePresence>
    </motion.div>
   )
}