import { useState } from 'react';

const VoteSondage = () => {
  const [activeCategory, setActiveCategory] = useState('Sondages');
  const [userVotes, setUserVotes] = useState({});
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: 'Quel est votre fruit préféré ?',
      options: [
        { id: 1, label: 'Pomme', image: 'https://via.placeholder.com/100', votes: 0 },
        { id: 2, label: 'Banane', image: 'https://via.placeholder.com/100', votes: 0 },
        { id: 3, label: 'Orange', image: 'https://via.placeholder.com/100', votes: 0 },
      ],
    },
  ]);
  const [projects] = useState([
    { id: 1, title: 'Projet 1', description: 'Description du projet 1.', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Projet 2', description: 'Description du projet 2.', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Projet 3', description: 'Description du projet 3.', image: 'https://via.placeholder.com/200' },
  ]);
  const [budget] = useState({
    sources: [{ id: 1, source: 'Donations', amount: 500 }, { id: 2, source: 'Partenaires', amount: 1500 }],
    expenses: [{ id: 1, description: 'Achat matériel', amount: 300 }, { id: 2, description: 'Publicité', amount: 200 }],
  });

  const handleVote = (pollId, optionId) => {
    const previousVote = userVotes[pollId];
    if (previousVote === optionId) return;

    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((option) =>
                option.id === optionId
                  ? { ...option, votes: option.votes + 1 }
                  : option.id === previousVote
                  ? { ...option, votes: option.votes - 1 }
                  : option
              ),
            }
          : poll
      )
    );
    setUserVotes((prevVotes) => ({ ...prevVotes, [pollId]: optionId }));
  };

  const renderButtons = () => {
    const categories = [ 'All','Sondages', 'Projets', 'Budget'];
    return categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 rounded ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
      >
        {category}
      </button>
    ));
  };

  const renderPolls = () => (
    <div>
      <h3 className="text-xl font-bold mb-4">Sondages</h3>
      {polls.map((poll) => (
        <div key={poll.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-bold mb-4">{poll.question}</h4>
          <div className="grid grid-cols-3 gap-4">
            {poll.options.map((option) => (
              <div key={option.id} className="text-center bg-white p-4 rounded-lg shadow-md">
                <img src={option.image} alt={option.label} className="w-20 h-20 mx-auto mb-2" />
                <p className="font-bold">{option.label}</p>
                <button
                  onClick={() => handleVote(poll.id, option.id)}
                  className={`mt-2 px-4 py-2 rounded-md ${userVotes[poll.id] === option.id ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white'}`}
                >
                  {userVotes[poll.id] === option.id ? 'Choisi' : 'Voter'}
                </button>
                <p className="text-sm mt-2 text-gray-600">Votes: {option.votes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div>
      <h3 className="text-xl font-bold mb-4">Projets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h4 className="text-lg font-bold">{project.title}</h4>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBudget = () => (
    <div>
      <h3 className="text-xl font-bold mb-4">Budget</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Type</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-200 text-right">Montant (€)</th>
            </tr>
          </thead>
          <tbody>
            {/* Sources de financement */}
            {budget.sources.map((source, index) => (
              <tr key={source.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="px-4 py-2 border border-gray-200">Source</td>
                <td className="px-4 py-2 border border-gray-200">{source.source}</td>
                <td className="px-4 py-2 border border-gray-200 text-right">{source.amount.toLocaleString()} €</td>
              </tr>
            ))}
            {/* Dépenses */}
            {budget.expenses.map((expense, index) => (
              <tr key={expense.id} className={`${(index + budget.sources.length) % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="px-4 py-2 border border-gray-200">Dépense</td>
                <td className="px-4 py-2 border border-gray-200">{expense.description}</td>
                <td className="px-4 py-2 border border-gray-200 text-right">{expense.amount.toLocaleString()} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  

  return (
    <div className="div">
      <nav className="px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="space-y-7">{renderButtons()}</div>
        </div>
      </nav>

      <div className="container mx-auto mt-8">
        {activeCategory === 'All' && (
          <>
            {renderPolls()}
            {renderProjects()}
            {renderBudget()}
          </>
        )}
        {activeCategory === 'Sondages' && renderPolls()}
        {activeCategory === 'Projets' && renderProjects()}
        {activeCategory === 'Budget' && renderBudget()}
      </div>
    </div>
  );
};

export default VoteSondage;
