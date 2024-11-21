import React from 'react';

const Sondage = ({ projects, search, handleVote, hasVoted }) => {
  return (
    <div className="font-sans p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Sondage des Projets</h1>
      <p className="mt-4 text-gray-600">
        Cliquez sur un projet pour voter. Vous ne pouvez voter qu'une seule fois.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleVote(project.id)}
            className={`relative rounded-lg border border-gray-300 shadow-md p-4 hover:scale-105 transition-transform ${
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
  );
};

export default Sondage;
