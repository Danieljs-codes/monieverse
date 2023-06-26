import NextImage from 'next/image'
import s from './Image.module.scss'
import { useState } from 'react'
import cn from '~/utils/cn'

type imageType = {
	[x: string]: any
	className?: any
	style?: any
	priority?: boolean
	quality?: number
	loading?: 'eager' | 'lazy'
	width: number | string | any
	height: number | string | any
	alt: string
	src: string
	preload?: boolean
}

export function Image({
	className,
	width,
	height,
	priority = false,
	preload = false,
	style = {},
	loading = 'lazy',
	quality = 100,
	alt = '',
	src,
	...props
}: imageType) {
	const [loadingComplete, setLoadingComplete] = useState(false)

	return preload ? (
		<div
			{...props}
			className={cn(s.image, className)}
			draggable='false'
			// @ts-ignore
			style={{ '--width': width, '--height': height }}>
			{preload && !loadingComplete && (
				<div className={s['image-loading']}>
					<span></span>
				</div>
			)}

			<NextImage
				fill
				priority={priority}
				loading={loading}
				onLoadingComplete={() => setLoadingComplete(true)}
				draggable='false'
				quality={quality}
				alt={alt}
				src={src}
			/>
		</div>
	) : (
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
