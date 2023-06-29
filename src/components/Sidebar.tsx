import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine} from 'phosphor-react'
export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1686562919000-812eecd59aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://github.com/matt-duraes.png"
                />
                <strong>Mateus Durães</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}