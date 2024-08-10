
// import React, { useState, useEffect } from 'react';
// import Users from '../components/Users';
// import axios from 'axios';

// const Profil = () => {
//   const [username, setUsername] = useState('');
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [creationDate, setCreationDate] = useState('');

//   const fetchUserData = async (username) => {
//     try {
//       console.log('Fetching user data for:', username);
//       const response = await axios.get(`http://localhost:5000/users/${username}`);
//       console.log('User data fetched:', response.data);
//       setCreationDate(response.data.creationDate);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
//     const storedUsername = window.localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//       fetchUserData(storedUsername);
//     }
//   }, []);

//   const handleFileChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', profilePhoto); 
//     formData.append('username', username);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome, {username}!</h1>
//       <p className='bg-grey'>Account created on: {creationDate ? new Date(creationDate).toLocaleDateString() : 'Loading...'}</p>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload Profile Photo</button>
//       <Users />
//     </div>
//   );
// };

// export default Profil;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profil = () => {
//   const [username, setUsername] = useState('');
//   const [userId, setUserId] = useState('');
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [creationDate, setCreationDate] = useState('');

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users/${userId}`);
//       setCreationDate(response.data.createdAt); 
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
//     const storedUsername = window.localStorage.getItem('username');
//     const storedUserId = window.localStorage.getItem('userId');
//     if (storedUsername && storedUserId) {
//       setUsername(storedUsername);
//       setUserId(storedUserId);
//       fetchUserData(storedUserId);
//     }
//   }, []);

//   const handleFileChange = (e) => {
//     setProfilePhoto(e.target.files[0]);
//   };
//   const handleFileUpload = async (profilePhoto) => {
//     const formData = new FormData();
//     formData.append('file', profilePhoto);
  
//     try {
//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       if (error.response) {
//         // Le serveur a répondu avec un statut différent de 2xx
//         console.error('Response error:', error.response.data);
//       } else if (error.request) {
//         // La requête a été faite mais aucune réponse n'a été reçue
//         console.error('Request error:', error.request);
//       } else {
//         // Une erreur est survenue lors de la configuration de la requête
//         console.error('General error:', error.message);
//       }
//     }
//   };
  // const handleFileUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('file', profilePhoto); 
  //   formData.append('userId', userId);

  //   try {
  //     const response = await axios.post('http://localhost:5000/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log('File uploaded successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };

//   return (
//     <div>
//       <h1>Welcome, {username}!,{userId}</h1>
//       <p>User ID: {userId}</p>
//       <p className='bg-grey'>Account created on: {creationDate ? new Date(creationDate).toLocaleDateString() : 'Loading...'}</p>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload Profile Photo</button>
//     </div>
//   );
// };

// export default Profil;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profil = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [creationDate, setCreationDate] = useState('');

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      setCreationDate(response.data.createdAt);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const storedUsername = window.localStorage.getItem('username');
    const storedUserId = window.localStorage.getItem('userId');
    if (storedUsername && storedUserId) {
      setUsername(storedUsername);
      setUserId(storedUserId);
      fetchUserData(storedUserId);
    }
  }, []);

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!profilePhoto) return;
    
    const formData = new FormData();
    formData.append('file', profilePhoto);
    formData.append('userId', userId);
    formData.append('name', username); 

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      if (error.response) {
        // Le serveur a répondu avec un statut différent de 2xx
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error('Request error:', error.request);
      } else {
        // Une erreur est survenue lors de la configuration de la requête
        console.error('General error:', error.message);
      }
    }
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>User ID: {userId}</p>
      <p className="bg-grey">Account created on: {creationDate ? new Date(creationDate).toLocaleDateString() : 'Loading...'}</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Profile Photo</button>
    </div>
  );
};

export default Profil;
