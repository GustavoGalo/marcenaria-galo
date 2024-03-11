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
          <div
            style={{
              height: 500,
              backgroundImage:
                "url(/marcenaria-galo/imgs/285854618_519680593187270_6398954660681100560_n.jpg)",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              height: 500,
              backgroundImage:
                "url(/marcenaria-galo/imgs/285854618_519680593187270_6398954660681100560_n.jpg)",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              height: 500,
              backgroundImage:
                "url(/marcenaria-galo/imgs/285854618_519680593187270_6398954660681100560_n.jpg)",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
