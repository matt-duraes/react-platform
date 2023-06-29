import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({content, onDeleteComment} : CommentProps) => {

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }
    const[likeCount, setLikeCount] = useState(0);

    const handleLikeComment = () => {
        setLikeCount( state => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/codestep.png"
                alt=""
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joao alves</strong>
                            <time title="14 de junho às 23:39" dateTime='2023-06-14'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}