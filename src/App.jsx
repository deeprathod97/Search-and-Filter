import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar.jsx';
import ContactList from './ContactList.jsx';
import CallingUI from './CallingUI.jsx';
import './App.css'


const App = () => {
  
  const names = [
    'Deep Rathod', 'Raj Patel', 'Amit Sharma', 'Ravi Kumar', 'Sneha Shah',
    'Anjali Mehta', 'Vikas Singh', 'Pooja Roy', 'Karan Gupta', 'Ramesh Yadav',
    'Sunita Agarwal', 'Mohit Joshi', 'Priya Reddy', 'Rahul Deshmukh', 'Neha Verma',
    'Arjun Thakur', 'Asha Mishra', 'Nikhil Bhatia', 'Manisha Dubey', 'Shyam Rana',
    'Komal Jain', 'Suresh Chauhan', 'Geeta Kapoor', 'Rajesh Malhotra', 'Kavita Kaushik',
    'Vipul Sharma', 'Swati Gupta', 'Dinesh Patel', 'Anand Bansal', 'Alok Tiwari',
    'Ritika Chaudhary', 'Gaurav Aggarwal', 'Meena Pandey', 'Hemant Saxena', 'Pallavi Desai',
    'Tarun Kohli', 'Sapna Arora', 'Abhay Khanna', 'Juhi Chawla', 'Madhuri Dixit',
    'Ajay Devgan', 'Kajol Mukherjee', 'Aamir Khan', 'Salman Khan', 'Shah Rukh Khan',
    'Akshay Kumar', 'Alia Bhatt', 'Ranbir Kapoor', 'Katrina Kaif', 'Priyanka Chopra',
    'Ishaan Khattar', 'Janvi Kapoor', 'Sara Ali Khan', 'Ananya Pandey', 'Disha Patani',
    'Tara Sutaria', 'Varun Dhawan', 'Sidharth Malhotra', 'Kiara Advani', 'Vicky Kaushal',
    'Bhuvan Bam', 'Carry Minati', 'Ashish Chanchlani', 'Amit Bhadana', 'Gaurav Taneja',
    'Nisha Madhulika', 'Sandeep Maheshwari', 'Ranveer Singh', 'Parineeti Chopra', 'Sonakshi Sinha',
    'Aditya Roy Kapoor', 'Anushka Sharma', 'Jacqueline Fernandez', 'Yami Gautam', 'Ayushmann Khurrana',
    'Rajkummar Rao', 'Nawazuddin Siddiqui', 'Radhika Apte', 'Kangana Ranaut', 'Huma Qureshi',
    'Nargis Fakhri', 'Ileana D','Cruz', 'Shraddha Kapoor', 'Arjun Kapoor', 'Imran Khan',
    'Sunny Leone', 'Esha Gupta', 'Tamannaah Bhatia', 'Hansika Motwani', 'Kajal Aggarwal',
    'Dhanush', 'Suriya', 'Vijay Sethupathi', 'Allu Arjun', 'Nani', 'Mahesh Babu', 'Rashmika Mandanna',
  ];


  const generateContacts = (num) => {
    const contacts = [];
    for (let i = 0; i < num; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      contacts.push({
        name: randomName,
        number: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
        image: `https://via.placeholder.com/50?text=${randomName.split(' ')[0]}`, 
      });
    }
    return contacts;
  };

  const [contacts] = useState([
    { name: 'Deep Rathod', number: '1234567890', image: 'https://via.placeholder.com/50?text=DR' },
    { name: 'Raj Patel', number: '0987654321', image: 'https://via.placeholder.com/50?text=RP' },
    { name: 'Amit Sharma', number: '1112223334', image: 'https://via.placeholder.com/50?text=AS' },
    ...generateContacts(100), 
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [callingContact, setCallingContact] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCall = (contact) => {
    setCallingContact(contact);
  };

  const handleEndCall = () => {
    setCallingContact(null);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Mobile Contact List</h1>
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={contacts} searchTerm={searchTerm} onCall={handleCall} />
      {callingContact && <CallingUI contact={callingContact} onEndCall={handleEndCall} />}
    </div>
  );
};

export default App;
