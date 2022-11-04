import { styled } from 'stitches.config'

export default function Image({ src, alt, title, css, ...props }) {
  return (
    <ImageStyled
      src={src}
      alt={alt}
      title={title}
      css={{ ...css }}
      {...props}
    />
  )
}

const ImageStyled = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})
