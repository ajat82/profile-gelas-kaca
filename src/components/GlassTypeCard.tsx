import Image from 'next/image';

interface GlassTypeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const GlassTypeCard = ({ title, description, imageUrl }: GlassTypeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-dark mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default GlassTypeCard;
