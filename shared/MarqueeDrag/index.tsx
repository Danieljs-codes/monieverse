import { useRouter } from 'next/router'
import { useRef, ReactElement, ReactNode, useEffect } from 'react'

export const MarqueeDrag = ({
	className,
	children,
}: {
	className?: string
	children: ReactElement | ReactNode
}) => {
	const router = useRouter()
	const draggableRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const initialiseMarqueeDrag = async () => {
			const MarqueeDrag = (await import('./MarqueeDrag')).MarqueeDrag
			new MarqueeDrag({
				element: draggableRef.current,
				elements: {
					items: draggableRef.current.querySelectorAll(
						'[data-animation="draggable-child"]'
					),
				},
			})
		}
		initialiseMarqueeDrag()
	}, [router.asPath])

	return (
		<div ref={draggableRef} className={className} data-cursor='grab'>
			{children}
		</div>
	)
}

export default MarqueeDrag
