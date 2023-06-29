import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css';
import './index.css';

//author: {avatar_url: "", name: "", role:""}
//publishedAt: Date
// content: String

const posts  = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matt-duraes.png",
      name: "Mateus Durães",
      role: "Front-end Developer"
    },
    content: [
      {type: 'paragraph', content:'👊Fala Galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, passa lá e dá uma conferida. Você irá curtir'},
      {type: 'link', content:'#novoprojeto'}
    ],
    publishedAt: new Date ('2023-06-20 20:46'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego G",
      role: "CTO"
    },
    content: [
      {type: 'paragraph', content:'👊Fala Galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, passa lá e dá uma conferida. Você irá curtir'},
      {type: 'link', content:'#novoprojeto'}
    ],
    publishedAt: new Date ('2023-06-21 20:56'),
  },
];

export const App = () => {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

