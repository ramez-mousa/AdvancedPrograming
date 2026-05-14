import Course from './components/Course'
import './App.css'
const App = () => {
  const course = {
    name: 'تطبيقات تطوير Half Stack',
    id: 1,
    parts: [
      { id: 1, name: 'أساسيات React', exercises: 10 },
      { id: 2, name: 'استخدام props لتمرير البيانات', exercises: 7 },
      { id: 3, name: 'حالة المكوّن', exercises: 14 },
      { id: 4, name: 'تطبيقات تنقيح React', exercises: 11 },
    ],
  }

  return <Course course={course} />
}

export default App