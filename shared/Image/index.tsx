import NextImage from 'next/image'
import s from './Image.module.scss'

import cn from '~/utils/cn'

type imageType = {
	[x: string]: any
	className?: any
	style?: any
	priority?: boolean
	quality?: number
	loading?: 'eager' | 'lazy'
	width: number | `${number}`
	height: number | `${number}`
	alt: string
	src: string
}

export function Image({
	className,
	width,
	height,
	priority = false,
	style = {},
	loading = 'lazy',
	quality = 100,
	alt = '',
	src,
	...props
}: imageType) {
	return (
		<NextImage
			{...props}
			priority={priority}
			loading={loading}
			className={cn(s.img, className)}
			draggable='false'
			width={width}
			height={height}
			style={{ ...style, '--width': width, '--height': height }}
			quality={quality}
			alt={alt}
			src={src}
		/>
	)
}
