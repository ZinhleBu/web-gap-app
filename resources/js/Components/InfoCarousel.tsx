import * as React from "react";

import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export function InfoCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <Carousel className="w-full max-w-xs" setApi={setApi}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="bg-transparent border-none shadow-none">
                                <div className="flex flex-col items-start justify-start">
                                    <h2 className="text-2xl font-bold text-sky-400 font-serif">
                                        Robert Gibbons
                                    </h2>
                                    <p className="text-lg text-neutral-500 mt-2 ">Partner, Founder & Chief Investment Officer</p>
                                    <p className="text-sm text-muted-foreground mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi accusantium, magni facere, laborum iste officia harum eius nesciunt est sint autem possimus ex, quidem nihil voluptas. Rem, cum nemo?</p>
                                    <br/>
                                    <p className="text-sm text-muted-foreground mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi accusantium, magni facere, laborum iste officia harum eius nesciunt est sint autem possimus ex, quidem nihil voluptas. Rem, cum nemo?</p>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-3 h-3 rounded-full bg-gray-400 mx-2 ${
                            index + 1 === current ? "bg-sky-400" : ""
                        }`}
                        onClick={() => api && api.scrollTo(index)}
                    />
                ))}
            </div>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
}
