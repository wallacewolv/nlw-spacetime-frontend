'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [typeMedia, setTypeMedia] = useState('')

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setTypeMedia(files[0].type)
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        className="invisible h-0 w-0"
      />

      {(preview && typeMedia.match('image') && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )) ||
        (preview && typeMedia.match('video') && (
          // eslint-disable-next-line
        <video
            src={preview}
            controls={false}
            className="aspect-video w-full rounded-lg object-cover"
          />
        ))}
    </>
  )
}
