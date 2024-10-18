import { Theme, useTheme } from 'app/providers/ThemeProvider';
import s from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Light from './../../../shared/assets/icons/light.svg'
import Night from './../../../shared/assets/icons/night.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(s.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <Night /> : <Light />}
        </Button>

    );
};