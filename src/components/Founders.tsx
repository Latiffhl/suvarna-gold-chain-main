import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type FounderProps = {
  name: string;
  position: string;
  image: string;
};

const foundersList: FounderProps[] = [
  {
    name: 'Latif Palikal Isbah',
    position: 'Chief Executive Officer',
    image: '/assets/img/founder/founder1.png',
  },
  {
    name: 'Ahmad Jahroni',
    position: 'Chief Technology Officer',
    image: '/assets/img/founder/founder2.png',
  },
  {
    name: 'Yesih Sustari',
    position: 'Chief Financial Officer',
    image: '/assets/img/founder/founder3.png',
  },
  {
    name: 'Neysha Aulia Rahmania',
    position: 'Chief Operating Officer',
    image: '/assets/img/founder/founder4.png',
  },
];

const FounderCard = ({ name, position, image }: FounderProps) => {
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
          <p className="text-gray-600 dark:text-gray-400">{position}</p>
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
            <FounderCard key={founder.name} name={founder.name} position={founder.position} image={founder.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
