// app/lessons/page.tsx
import Card from '@/components/Card'
import { lessons } from '@/constants'

const LessonsPage = () => {
  return (
    <div className="lessons-page">
      <h1>Lesson Wise Guide</h1>
      <div className="cards-container">
        {lessons.map((lesson) => (
          <Card
            key={lesson.lessonNumber}
            lessonNumber={lesson.lessonNumber}
            title={lesson.title}
            description={lesson.description}
            imageUrl={lesson.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default LessonsPage
