// import React, { useState } from 'react';
// import axios from 'axios';

// import { TextField, Button } from '@mui/material';

// const NewPost = () => {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/posts', { name, message });
//       alert('Post added successfully');
//       setName('');
//       setMessage('');
//     } catch (error) {
//       console.error('Error adding post', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         fullWidth
//         label="Title"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         margin="normal"
//         variant="outlined"
//       />
//       <TextField
//         fullWidth
//         label="Content"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         margin="normal"
//         variant="outlined"
//         multiline
//         rows={4}
//       />
//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Post
//       </Button>
//     </form>
//   );
// };

// export default NewPost;
