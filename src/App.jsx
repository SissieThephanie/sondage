import { useState } from 'react';
import './App.css';
import Affiche from './components/Affiche';
import Navbar from './components/Navbar';

function App() {
  // État pour gérer la vue active
  const [activeView, setActiveView] = useState('Affiche'); // Par défaut, 'Affiche'

  return (
    <div className="overflow-x-hidden">
      {/* Barre de navigation */}
      <Navbar setActiveView={setActiveView} activeView={activeView} />

      {/* Affichage dynamique du contenu */}
      <div className="container mx-auto mt-8">
        {activeView === 'Affiche' && <Affiche />}
        {activeView === 'Projects' && <div>Affichage des Projets ici</div>}
        {activeView === 'All' && (
          <div>
            <h2 className="text-2xl font-bold">Tous les contenus</h2>
            <p>Affichage combiné des sondages et des projets ici.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
