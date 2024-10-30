import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import CenterHeader from "@/Components/CenterHeader";
import imageUrl from "../../../public/download.jpeg";
import { InfoCarousel } from "@/Components/InfoCarousel";
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
   

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 sm:flex sm:flex-col">
                <img
                    id="background"
                    className="absolute top-0  sm:w-full sm:h-1/3 md:w-1/2 md:h-screen"
                    src="/test-left-background-asset.png"
                />
                <div className="md:absolute md:top-1/4 left-10 sm:w-full sm:relative sm:top-0 md:w-1/3 text-left ml-4 mr-4 max-w-[300px] ">
                    <h1 className="text-3xl font-semibold text-sky-600 mb-3">Leadership</h1>
                    <p className="text-md text-white font-extralight" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus dignissimos amet dolor error rerum praesentium sunt vel et accusantium, illum cupiditate magnam iusto! Fugit veniam beatae placeat soluta harum?
                    </p>
                </div>
                <div className="relative flex md:min-h-screen md:top-1/2  sm:bottom-1/3 items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <CenterHeader className="mx-auto" imageUrl={imageUrl} />
                </div>
                <div className="absolute md:top-1/4 right-0 sm:w-full sm:bottom-1/3 md:w-1/3 ">
                    <InfoCarousel />
                </div>
            </div>
        </>
    );
}
