import React from 'react'
import { getLogoDataURL } from './svg'

export function Favicon() {
  const faviconUrl = getLogoDataURL('color')
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={faviconUrl} />
      <link rel="apple-touch-icon" href={faviconUrl} />
    </>
  )
}

export function getFaviconMetadata() {
  const faviconUrl = getLogoDataURL('color')
  return { icon: faviconUrl, apple: faviconUrl }
}

export default Favicon
