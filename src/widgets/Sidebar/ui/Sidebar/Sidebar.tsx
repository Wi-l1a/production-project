import { useState } from 'react';
import s from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)


    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
            <button className={s.toggle} onClick={onToggle}>toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};