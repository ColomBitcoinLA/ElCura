# 07. Modelos de datos

## Book
- title
- slug
- description
- coverImageUrl
- formats: [pdfUrl, audioUrl, videoUrl]
- pages: [ { pageNumber, text } ]
- createdAt

## User
- name
- email
- passwordHash
- role (user, admin)
- subscription (free, lifetime)

## Progress
- userId
- bookId
- lastPage
- updatedAt

## Highlight
- userId
- bookId
- pageNumber
- ranges: [{ start, end }]
- note
