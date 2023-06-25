import { Lenis } from '@studio-freight/react-lenis'
import s from './scrollable-box.module.scss'

export function ScrollableBox({ children }: { children: any }) {
	return <Lenis className={s.hi}>{children}</Lenis>
}
