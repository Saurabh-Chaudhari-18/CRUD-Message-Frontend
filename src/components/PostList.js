// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Button, TextField, TextareaAutosize } from '@mui/material';
// import './Posts.css';

// const AllPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [editedName, setEditedName] = useState('');
//   const [editedMessage, setEditedMessage] = useState('');

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts', error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${id}`);
//       setPosts(posts.filter(post => post._id !== id));
//     } catch (error) {
//       console.error('Error deleting post', error);
//     }
//   };

//   const handleEdit = (post) => {
//     setEditingPostId(post._id);
//     setEditedName(post.name);
//     setEditedMessage(post.message);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const updatedPost = { name: editedName, message: editedMessage };
//       await axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost);
//       setPosts(posts.map(post => post._id === id ? updatedPost : post));
//       setEditingPostId(null);
//     } catch (error) {
//       console.error('Error updating post', error);
//     }
//   };

//   return (
//     <div className="posts-container">
//       <Typography variant="h4" gutterBottom>All Posts</Typography>
//       <ul>
//         {posts.map(post => (
//           <Card key={post._id} className="post-item">
//             <CardContent>
//               {editingPostId === post._id ? (
//                 <div>
//                   <TextField
//                     fullWidth
//                     label="Edit Name"
//                     value={editedName}
//                     onChange={(e) => setEditedName(e.target.value)}
//                     margin="normal"
//                     variant="outlined"
//                   />
//                   <TextareaAutosize
//                     minRows={4}
//                     placeholder="Edit Message"
//                     value={editedMessage}
//                     onChange={(e) => setEditedMessage(e.target.value)}
//                     className="edit-textarea"
//                   />
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleUpdate(post._id)}
//                     style={{ marginRight: '10px' }}
//                   >
//                     Save
//                   </Button>
//                   <Button variant="outlined" color="secondary" onClick={() => setEditingPostId(null)}>
//                     Cancel
//                   </Button>
//                 </div>
//               ) : (
//                 <div>
//                   <Typography variant="h5">{post.name}</Typography>
//                   <Typography variant="body1">{post.message}</Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleEdit(post)}
//                     style={{ marginRight: '10px' }}
//                   >
//                     Edit
//                   </Button>
//                   <Button variant="contained" color="secondary" onClick={() => handleDelete(post._id)}>
//                     Delete
//                   </Button>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllPosts;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, TextField, TextareaAutosize } from '@mui/material';
import './Posts.css';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedMessage, setEditedMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use environment-based API URL
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  const handleEdit = (post) => {
    setEditingPostId(post._id);
    setEditedName(post.name);
    setEditedMessage(post.message);
  };

  const handleUpdate = async (id) => {
    try {
      const updatedPost = { name: editedName, message: editedMessage };
      await axios.put(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post._id === id ? updatedPost : post));
      setEditingPostId(null);
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="posts-container">
      <Typography variant="h4" gutterBottom>All Posts</Typography>
      <ul>
        {posts.map(post => (
          <Card key={post._id} className="post-item">
            <CardContent>
              {editingPostId === post._id ? (
                <div>
                  <TextField
                    fullWidth
                    label="Edit Name"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextareaAutosize
                    minRows={4}
                    placeholder="Edit Message"
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                    className="edit-textarea"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(post._id)}
                    style={{ marginRight: '10px' }}
                  >
                    Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => setEditingPostId(null)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography variant="h5">{post.name}</Typography>
                  <Typography variant="body1">{post.message}</Typography>
                  {/* Display the post creation date and time */}
                  <Typography variant="body1" color="textSecondary">
                    Posted on: {formatDate(post.createdAt)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(post)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(post._id)}>
                    Delete
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;

