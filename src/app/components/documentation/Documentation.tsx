import { Configuration } from "./Configuration"
import { DocNavigation } from "./DocNavigation"
import { Introduction } from "./Introduction"
import { PackageStructure } from "./PackageStructure"
import { QuickStart } from "./QuickStart"


export const Documentation = () => {
    return (
        <>
       
        <div className="bg-body-bg md:pt-0 pt-12" >
            
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) p-6 lg:pt-44 pt-16">
                <div className='bannier-name bg-red-800 mb-8'>
                    <h2 className="text-3xl font-bold">A propos</h2>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-3 col-span-12 lg:block hidden">
                        <DocNavigation />
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <Introduction />
                        <QuickStart />
                        <PackageStructure />
                        <Configuration />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}