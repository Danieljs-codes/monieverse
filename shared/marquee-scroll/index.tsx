import { useRouter } from 'next/router'
import { useRef, ReactElement, ReactNode, useEffect } from 'react'

export const MarqueeScroll = ({
	className,
	children,
}: {
	className?: string
	children: ReactElement | ReactNode
}) => {
	const router = useRouter()
	const marqueeRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const initialiseMarqueeScroll = async () => {
			const MarqueeScroll = (await import('./MarqueeScroll')).MarqueeScroll
			new MarqueeScroll({
				element: marqueeRef.current,
				multiplier: 2,
				elements: {
					items: marqueeRef.current.querySelectorAll('[data-animation="child"]'),
				},
			})
		}
		initialiseMarqueeScroll()
	}, [router.asPath])

	return (
		<div ref={marqueeRef} className={className}>
			{children}
		</div>
	)
}

export default MarqueeScroll
