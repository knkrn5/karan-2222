import { Youtube, Instagram } from 'lucide-react';

type socialLinks = {
  twitter: string;
  instagram: string;
  youtube: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  social: socialLinks;
};

function createTeamMember(name: string, role: string, image: string, social: socialLinks): TeamMember {
  return { name, role, image, social };
}

/* const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: 'https://via.placeholder.com/150', social: '#' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150', social: '#' },
  { name: 'Alice Johnson', role: 'Lead Designer', image: 'https://via.placeholder.com/150', social: '#' },
  { name: 'Bob Williams', role: 'Marketing Head', image: 'https://via.placeholder.com/150', social: '#' }
]; */

/* const teamMembers = [
  [ 'John Doe', 'CEO & Founder', 'https://via.placeholder.com/150', '#' ],
  [ 'Jane Smith', 'CTO', 'https://via.placeholder.com/150', '#' ],
  [ 'Alice Johnson', 'Lead Designer', 'https://via.placeholder.com/150', '#' ],
  [ 'Bob Williams', 'Marketing Head', 'https://via.placeholder.com/150', '#' ]
] */

const teamMembers = [
  createTeamMember('John Doe', 'CEO & Founder', 'https://via.placeholder.com/150', {
    twitter: '/twitter',
    instagram: '/insta',
    youtube: '/yt',
  }),
  createTeamMember('Jane Smith', 'CTO', 'https://via.placeholder.com/150', {
    twitter: '/jane-twitter',
    instagram: '/jane-insta',
    youtube: '/jane-yt',
  }),
  createTeamMember('Alice Johnson', 'Lead Designer', 'https://via.placeholder.com/150', {
    twitter: '/alice-twitter',
    instagram: '/alice-insta',
    youtube: '/alice-yt',
  }),
  createTeamMember('Bob Williams', 'Marketing Head', 'https://via.placeholder.com/150', {
    twitter: '/bob-twitter',
    instagram: '/bob-insta',
    youtube: '/bob-yt',
  }),
];

console.log(teamMembers[0].social.twitter);

const TeamPage = () => {
  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <img className="w-32 h-32 mx-auto rounded-full mb-4" src={member.image} alt={`${member.name}`} />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {member.social &&
                  Object.entries(member.social).map(([key, value]) => (
                    <div key={key}>
                      <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        {key === 'twitter' ? (
                          <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.931 9.931 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 2a4.92 4.92 0 0 0-4.92 4.92c0 .385.044.76.127 1.122A13.978 13.978 0 0 1 1.64 3.16a4.918 4.918 0 0 0-.665 2.475c0 1.71.87 3.22 2.188 4.103a4.903 4.903 0 0 1-2.23-.616v.062a4.923 4.923 0 0 0 3.946 4.828 4.927 4.927 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 21.54a13.945 13.945 0 0 0 7.548 2.213c9.058 0 14.01-7.496 14.01-13.986 0-.213-.004-.426-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
                          </svg>
                        ) : key === 'instagram' ? (
                          <Instagram />
                        ) : (
                          <Youtube />
                        )}
                      </a>
                    </div>
                  ))}

                {/*  {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.931 9.931 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 2a4.92 4.92 0 0 0-4.92 4.92c0 .385.044.76.127 1.122A13.978 13.978 0 0 1 1.64 3.16a4.918 4.918 0 0 0-.665 2.475c0 1.71.87 3.22 2.188 4.103a4.903 4.903 0 0 1-2.23-.616v.062a4.923 4.923 0 0 0 3.946 4.828 4.927 4.927 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 21.54a13.945 13.945 0 0 0 7.548 2.213c9.058 0 14.01-7.496 14.01-13.986 0-.213-.004-.426-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                )}
                {member.social.youtube && (
                  <a href={member.social.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.931 9.931 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 2a4.92 4.92 0 0 0-4.92 4.92c0 .385.044.76.127 1.122A13.978 13.978 0 0 1 1.64 3.16a4.918 4.918 0 0 0-.665 2.475c0 1.71.87 3.22 2.188 4.103a4.903 4.903 0 0 1-2.23-.616v.062a4.923 4.923 0 0 0 3.946 4.828 4.927 4.927 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 21.54a13.945 13.945 0 0 0 7.548 2.213c9.058 0 14.01-7.496 14.01-13.986 0-.213-.004-.426-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
