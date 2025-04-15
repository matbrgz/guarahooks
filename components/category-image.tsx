import Image from 'next/image';

type CategoryImageProps = {
  imageBasePath: string;
  alt: string;
};

export function CategoryImage({ imageBasePath, alt }: CategoryImageProps) {
  return (
    <>
      <Image
        className="w-full dark:hidden"
        src={`${imageBasePath}.png`}
        alt={alt}
        width={268}
        height={198}
      />
      <Image
        className="hidden w-full dark:block"
        src={`${imageBasePath}-dark.png`}
        alt={`${alt} dark`}
        width={268}
        height={198}
      />
    </>
  );
}
