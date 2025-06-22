import tomImage from '../../assets/images/tom.png';
import emmaImage from '../../assets/images/emma.png';
import willimage from '../../assets/images/will.png';
const teamMembers = [
  {
    name: 'Tom Cruise',
    image: tomImage,
  },
  {
    name: 'Domatiara',
    image: emmaImage,
  },
  {
    name: 'Will Smith',
    image: willimage,
  },
   {
    name: 'Chiamaka Nnakwu',
    image: emmaImage,
  },
  {
    name: 'Emma Watson',
    image: willimage,
  },
];

export default function TeamMembers() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
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
