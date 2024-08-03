import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ravi Kumar K",
    position: "Chief Executive Officer",
    image: "TeamPic/ravi.png",
    linkedin: "https://www.linkedin.com/in/ravi2580/",
    instagram: "https://www.instagram.com/ravi_kumar_k",
    email: "mailto:ravi@example.com",
  },
  {
    name: "Rohan JH",
    position: "Chief Information Officer",
    image: "TeamPic/rohan.png",
    linkedin: "https://www.linkedin.com/in/rohan-gnanesh-9a633a226/",
    instagram: "https://www.instagram.com/rohan_jh/",
    email: "mailto:rohan@example.com",
  },
  {
    name: "Rohit Kumar BR",
    position: "Chief Technology Officer",
    image: "TeamPic/rohit.png",
    linkedin: "https://www.linkedin.com/in/rohit7830/",
    instagram: "https://www.instagram.com/rohitkumar.0783/",
    email: "mailto:rohit@example.com",
  },
  {
    name: "Nikhil Chowdary",
    position: "Chief Financial Officer",
    image: "TeamPic/nikhil.png",
    linkedin:
      "https://www.linkedin.com/in/nikhil-chowdary-garikapati-2a5433212/",
    instagram: "https://www.instagram.com/nikh.cg/",
    email: "mailto:nikhil@example.com",
  },
  {
    name: "Sai Revanth M",
    position: "Chief Operating Officer",
    image: "TeamPic/revanth.png",
    linkedin: "https://www.linkedin.com/in/sairevanth0007/",
    instagram: "https://www.instagram.com/sairevanth0007/",
    email: "mailto:revanth@example.com",
  },
];

const Team = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="p-4 shadow-lg flex flex-col items-center"
            >
              <div
                className="w-full h-80 mb-4 flex items-center justify-center rounded-xl relative border border-[#182233]  "
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
                }}
              >
                <div className="w-48 h-48 relative rounded-full flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full bg-[#FFF5EA] border-2 border-gray-700"
                    loading="lazy"
                    style={{ display: "block" }}
                  />
                  <div className="absolute bottom-[-50px] left-0 right-0 flex items-center justify-center py-2">
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-blue-600 text-2xl transition-transform transform hover:scale-125" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-pink-600 text-2xl transition-transform transform hover:scale-125" />
                      </a>
                      <a
                        href={member.email}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope className="text-[#1E88E5] text-2xl transition-transform transform hover:scale-125" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div
              key={index}
              className="p-4 shadow-lg flex flex-col items-center"
            >
              <div
                className="w-full h-80 mb-4 flex items-center justify-center rounded-xl relative border border-[#182233] "
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
                }}
              >
                <div className="w-48 h-48 relative rounded-full flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full bg-[#FFF5EA] border-2 border-gray-700"
                    loading="lazy"
                    style={{ display: "block" }}
                  />
                  <div className="absolute bottom-[-50px] left-0 right-0 flex items-center justify-center py-2">
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-blue-600 text-2xl transition-transform transform hover:scale-125" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-pink-600 text-2xl transition-transform transform hover:scale-125" />
                      </a>
                      <a
                        href={member.email}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope className="text-[#1E88E5] text-2xl transition-transform transform hover:scale-125" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
