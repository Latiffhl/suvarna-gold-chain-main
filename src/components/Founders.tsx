import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Instagram } from 'lucide-react';

type FounderProps = {
  name: string;
  position: string;
  image: string;
  instagram?: string;
};

const foundersList: FounderProps[] = [
  {
    name: 'Latif Palikal Isbah',
    position: 'Chief Executive Officer',
    image: '/assets/img/founder/founder1.png',
    instagram: 'latiffhalik_22',
  },
  {
    name: 'Ahmat Jabroni',
    position: 'Chief Technology Officer',
    image: '/assets/img/founder/founder2.png',
    instagram: 'jahronii24._',
  },
  {
    name: 'Yesih Sustari',
    position: 'Chief Financial Officer',
    image: '/assets/img/founder/founder3.png',
    instagram: 'yesihsst_',
  },
  {
    name: 'Neysha Aulia Rahmania',
    position: 'Chief Operating Officer',
    image: '/assets/img/founder/founder4.png',
    instagram: 'neysharr18',
  },
];

const FounderCard = ({ name, position, image, instagram }: FounderProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-2 flex flex-col items-center">
        <Avatar className="h-32 w-32 mb-4 border-2 border-gold-400">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-gold-100 text-gold-800 text-xl">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <CardContent className="text-center p-4">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">{position}</p>
          {instagram && (
            <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="text-sm">@{instagram}</span>
            </a>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default function Founders() {
  return (
    <section id="founders" className="py-16 bg-white dark:bg-navy-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tim Pendiri Suvarna</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">Kami adalah tim profesional dengan pengalaman di bidang teknologi dan keuangan yang berkomitmen untuk revolusi investasi emas digital.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foundersList.map((founder) => (
            <FounderCard key={founder.name} name={founder.name} position={founder.position} image={founder.image} instagram={founder.instagram} />
          ))}
        </div>
      </div>
    </section>
  );
}
