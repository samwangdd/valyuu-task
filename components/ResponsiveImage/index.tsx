// ResponsiveImage
interface ResponsiveImageProps {
  src: string;
  alt: string;
}

const ResponsiveImage = ({ src, alt }: ResponsiveImageProps) => {
  return (
    <picture>
      <source srcSet={`${src}?w=640`} media='(max-width: 640px)' />
      <source srcSet={`${src}?w=1024`} media='(max-width: 1024px)' />
      <source srcSet={`${src}?w=1280`} media='(max-width: 1280px)' />
      <img src={`${src}?w=1920`} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
