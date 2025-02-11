import { useState, useEffect } from 'react';
import axios from 'axios';

// Filter-komponent
const Filter = ({ filter, handleFilterChange }) => (
  <div>
    Søk <input value={filter} onChange={handleFilterChange} />
  </div>
);

// Persons-komponent
const Persons = ({ personsToShow }) => (
  <div>
    {personsToShow.map(person => (
      <p key={person.id}>{person.name}: {person.number}</p>
    ))}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Hente data fra serveren ved oppstart
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    const newPerson = { name: newName, number: newNumber };
    
    axios.post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      });
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Telefonbook</h2>
      <h3>Legg til ny</h3>
      <div>
        Navn: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        Nummer: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>Legg til</button>
      </div>
      <h3>Nummer</h3>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
