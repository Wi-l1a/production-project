import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <ul className={s.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t('О нас')}</AppLink>
            </ul>
            <LangSwitcher className={s.lang} />
        </div>
    )
}
