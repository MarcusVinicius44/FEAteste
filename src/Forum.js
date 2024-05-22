import React, { useState } from "react";
import "./Forum.css";
import Laranja from "./Laranja.png";
import Uva from "./Uva.png";
import Melancia from "./Melancia.png";

// Componente de Postagem
function Post({ author, age, content, timestamp, image }) {
  return (
    <div className="mensage">
      <img src={image} alt="Imagem do perfil" className="profile-image" />
      <div>
        <h3>
          {author}, {age} anos
        </h3>
        <p>{content}</p>
        <p>Postado em: {timestamp}</p>
      </div>
    </div>
  );
}

// Componente de Formulário de Postagem
function PostForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [age, setAge] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, age, content, image, timestamp: new Date().toLocaleString() });
    setAuthor("");
    setAge("");
    setContent("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="nome">
        Nome:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="Idade">
        Idade:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="misericordia">
        Conteúdo:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

          <button type="submit" className="botao">
        Postar
      </button>
    </form>
  );
}

// Componente Principal do Fórum
function Forum() {
  const [posts, setPosts] = useState([
    { author: 'Alice', age: '25', content: 'Olá boa tarde, estou procurando pontos de coleta, pode me ajudar?', image: Laranja, timestamp: new Date().toLocaleString() },
    { author: 'João', age: '30', content: 'Use o localizador do site para encontrar alguns perto de você!', image: Uva, timestamp: new Date().toLocaleString() },
    { author: 'Carol', age: '28', content: 'Fiz uma entrega de materiais hoje, acumulei 30 pontos!', image: Melancia, timestamp: new Date().toLocaleString() }
  ]);

  const handlePostSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="FEA">
      <h1>Fórum</h1>
      {posts.map((post, index) => (
        <Post
          key={index}
          author={post.author}
          age={post.age}
          content={post.content}
          image={post.image}
          timestamp={post.timestamp}
        />
      ))}
      <PostForm onSubmit={handlePostSubmit} />
    </div>
  );
}

export default Forum;
