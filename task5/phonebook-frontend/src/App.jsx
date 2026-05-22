import { useState, useEffect } from 'react'
import personService from './services/persons'

const Notification = ({ message, type }) => {
  if (!message) return null

  const style = {
    color: type === 'error' ? 'red' : 'green',
    background: '#f0f0f0',
    fontSize: '18px',
    border: `2px solid ${type === 'error' ? 'red' : 'green'}`,
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px'
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')

  useEffect(() => {
    personService.getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])

  const showNotification = (text, type = 'success') => {
    setMessage(text)
    setMessageType(type)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const existing = persons.find(
      p => p.name === newName
    )

    // تحديث
    if (existing) {
      const confirmUpdate = window.confirm(
        `${newName} موجود مسبقًا، هل تريد تحديث الرقم؟`
      )

      if (confirmUpdate) {
        const updatedPerson = {
          ...existing,
          number: newNumber
        }

        personService
          .update(existing.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(p =>
                p.id !== existing.id
                  ? p
                  : returnedPerson
              )
            )

            showNotification(
              `تم تحديث ${newName}`
            )

            setNewName('')
            setNewNumber('')
          })
      }

      return
    }

    // إضافة
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(
          persons.concat(returnedPerson)
        )

        showNotification(
          `تمت إضافة ${newName}`
        )

        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id, name) => {
    const confirmDelete = window.confirm(
      `هل تريد حذف ${name} ؟`
    )

    if (confirmDelete) {
      personService
        .remove(id)
        .then(() => {
          setPersons(
            persons.filter(p => p.id !== id)
          )

          showNotification(
            `تم حذف ${name}`
          )
        })
    }
  }

  const filteredPersons = filter
    ? persons.filter(person =>
        person.name
          .toLowerCase()
          .includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h1>دليل الهاتف</h1>

      <Notification
        message={message}
        type={messageType}
      />

      <div>
        البحث:
        <input
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        />
      </div>

      <h2>إضافة شخص</h2>

      <form onSubmit={addPerson}>
        <div>
          الاسم:
          <input
            value={newName}
            onChange={(e) =>
              setNewName(e.target.value)
            }
          />
        </div>

        <div>
          الرقم:
          <input
            value={newNumber}
            onChange={(e) =>
              setNewNumber(e.target.value)
            }
          />
        </div>

        <button type="submit">
          إضافة
        </button>
      </form>

      <h2>الأرقام</h2>

      <ul>
        {filteredPersons.map(person => (
          <li key={person.id}>
            {person.name} : {person.number}

            <button
              onClick={() =>
                deletePerson(
                  person.id,
                  person.name
                )
              }
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App