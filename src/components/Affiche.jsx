import { useState } from 'react';

const VoteSondage = () => {
  // État pour stocker les projets et leur nombre de votes
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Projet A',
      description: 'Un projet innovant pour améliorer l’efficacité énergétique.',
      image: 'project.webp', // Remplacez par vos images
      votes: 0,
    },
    {
      id: 2,
      name: 'Projet B',
      description: 'Une solution technologique pour réduire les déchets plastiques.',
      image: 'Projet.webp', // Remplacez par vos images
      votes: 0,
    },
    {
      id: 3,
      name: 'Projet C',
      description: 'Un projet éducatif pour démocratiser l’accès au numérique.',
      image: 'https://via.placeholder.com/150', // Remplacez par vos images
      votes: 0,
    },
  ]);

  // État pour savoir si l'utilisateur a déjà voté
  const [userVote, setUserVote] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // Fonction pour gérer le clic sur un projet
  const handleVote = (projectId) => {
    if (hasVoted) return; // Empêche de voter si déjà voté
    if (userVote !== null) {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === userVote
            ? { ...project, votes: project.votes - 1 } // Retirer un vote du projet précédent
            : project
        )
      );
    }
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, votes: project.votes + 1 }
          : project
      )
    );
    setUserVote(projectId);
    setHasVoted(true); // Marque comme "déjà voté"
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="div">
      <nav className="bg-gray-800 text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-lg font-bold">
            <a href="#" className="hover:text-gray-300">
              MonSite
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Accueil
            </a>
            <a href="#" className="hover:text-gray-300">
              À propos
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <form className="relative w-full max-w-md" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Recherche..."
              value={search}
              onChange={handleSearch}
              className="w-full rounded-lg bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
            >
              🔍
            </button>
          </form>
        </div>
      </nav>

      <div className="font-sans p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Sondage des Projets</h1>
        <p className="mt-4 text-gray-600">
          Cliquez sur un projet pour voter. Vous ne pouvez voter qu'une seule fois.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleVote(project.id)}
              className={`relative rounded-lg border shadow-md p-4 hover:scale-105 transition-transform ${
                hasVoted ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {project.name}
              </h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-4 text-lg font-bold text-blue-600">
                {project.votes} vote(s)
              </p>
            </div>
          ))}
        </div>

        {hasVoted && (
          <p className="mt-6 text-red-500">Vous avez déjà voté !</p>
        )}
      </div>
    </div>
  );
};

export default VoteSondage;
