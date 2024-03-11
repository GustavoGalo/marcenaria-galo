import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem>
          <img
            src="/marcenaria-galo/imgs/285064869_1320839168446484_3479823862929898784_n.jpg"
            alt=""
            className="w-full md:max-h-[600px] max-h-96 object-cover object-center m-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/marcenaria-galo/imgs/284729798_3283231415259192_1610654909653121753_n.jpg"
            alt=""
            className="w-full md:max-h-[600px] max-h-96 object-cover object-center m-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/marcenaria-galo/imgs/285109124_1879583948915332_3952310456083359289_n.jpg"
            alt=""
            className="w-full md:max-h-[600px] max-h-96 object-cover object-center m-auto"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
