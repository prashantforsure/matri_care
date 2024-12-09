import React from 'react'

interface CardProps {
  lessonNumber: number
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({
  lessonNumber,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={`Lesson ${lessonNumber}`} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>
          Lesson {lessonNumber}: {title}
        </h2>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  )
}

const styles = {
  card: {
    width: '200px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
  },
  image: {
    width: '100%',
    height: '100px',
    objectFit: 'cover' as 'cover',
  },
  content: {
    padding: '8px',
  },
  title: {
    fontSize: '16px',
    marginBottom: '8px',
  },
  description: {
    fontSize: '12px',
    color: '#666',
  },
}

export default Card
