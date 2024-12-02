import './NavBar.css';

export default function MainContent(){
    return (
        <main className='mainContent'>
            <h1 className="heading">Fun facts about React</h1>
        <ul className='facts-list'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke </li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </main>
        
    )
}