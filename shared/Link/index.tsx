import { useStore } from '@/utils/store'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { isHash, isProtocol, isExternal } from '@/utils'
import { useLenis } from '@studio-freight/react-lenis'

export function Link({
	href,
	children,
	onClick,
	...rest
}: {
	href: string
	children: any
	onClick?: () => void
	[x: string]: any
}) {
	const router = useRouter()
	const lenis = useLenis(() => {})
	const setTriggerTransition = useStore(
		({ setTriggerTransition }) => setTriggerTransition
	)

	if (isHash(href) && router.pathname === '/') {
		return (
			<a
				href={href}
				onClick={(e) => {
					e.preventDefault()
					if (onClick) onClick()
					lenis.scrollTo(href)
				}}
				{...rest}>
				{children}
			</a>
		)
	}

	if (isExternal(href) || isProtocol(href)) {
		return (
			<a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
				{children}
			</a>
		)
	}

	return (
		<NextLink
			onClick={(e) => {
				e.preventDefault()
				if (onClick) onClick()

				if (router.pathname !== href && isHash(href)) {
					setTriggerTransition('/')
					const tm = setTimeout(() => {
						document.getElementById(href.replace(/^./, '')).scrollIntoView()
						clearTimeout(tm)
					}, 3000)
				} else if (router.pathname !== href) {
					setTriggerTransition(href)
				}
			}}
			href={href}
			// scroll={false}
			{...rest}>
			{children}
		</NextLink>
	)
}
