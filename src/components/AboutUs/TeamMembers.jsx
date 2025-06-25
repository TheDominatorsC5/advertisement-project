import gustine from '../../assets/images/gustine.png';
import domatiara from '../../assets/images/domatiara.png';
import chiamaka from '../../assets/images/chiamaka.png';
import yoda from '../../assets/images/yoda.png';

const teamMembers = [
  {
    name: 'Gustine',
    image: gustine,
  },
  {
    name: 'Domatiara',
    image: domatiara,
  },
  {
    name: 'Yoda',
    image: yoda,
  },
  {
    name: 'Chiamaka Nnakwu',
    image: chiamaka,
  }
];

export default function TeamMembers() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className='text-center text-3xl font-serif font-bold mb-15'>
        <h1>MEET THE TEAM</h1>
      </div>
      <div className="grid gap-10 md:grid-cols-3 justify-center items-center text-center">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="w-60 h-60 mx-auto object-cover rounded-md shadow-sm"
            />
            <p className="mt-4 text-lg font-medium">{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
