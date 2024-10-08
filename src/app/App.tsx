import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'


const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme, 'general', 'wrapper'])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <button onClick={toggleTheme}>Переключить тему</button>
            <AppRouter />
        </div>
    )
}

export default App