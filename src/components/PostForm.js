import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import './PostForm.css'; // Separate CSS file for the form styling

const PostForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const newPost = { name, message };
      await axios.post('http://localhost:5000/api/posts', newPost);
      setName('');
      setMessage('');
      setError('');
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post', error);
      setError('Failed to create post');
    }
  };

  return (
    <div className="form-container">
      <Card className="post-form-card">
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Create a New Post
          </Typography>
          <form onSubmit={handleSubmit} className="form-content">
            {error && (
              <Typography variant="body2" color="error" className="error-message">
                {error}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="submit-button"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostForm;
