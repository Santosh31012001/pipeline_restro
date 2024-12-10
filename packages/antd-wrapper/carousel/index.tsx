import { Carousel, CarouselProps } from 'antd'
interface CarouselWrapperProps extends CarouselProps {}

const CarouselWrapper: React.FC<CarouselWrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Carousel {...rest}>{children}</Carousel>
}

export default CarouselWrapper
