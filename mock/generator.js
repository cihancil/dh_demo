const { faker } = require('@faker-js/faker')
const fs = require('fs')

const questions = Array.from(Array(10).keys()).map(() => {
  const choiceIds = faker.helpers.multiple(faker.string.uuid, { count: 5 })
  return {
    id: faker.string.uuid(),
    description: faker.helpers.maybe(() => faker.lorem.paragraphs({
      min: 1,
      max: 3,
    }), {
      probability: 0.5
    }) || null,
    question: faker.lorem.paragraphs({
      min: 1,
      max: 2,
    }).slice(0, -1) + '?',
    choices: choiceIds.map((choiceId) => {
      return {
        id: choiceId,
        text: faker.lorem.sentence(),
      }
    }),
    correctChoiceId: faker.helpers.arrayElement(choiceIds),
  }
})

const data = {
  title: faker.lorem.sentence({ min: 1, max: 2 }).slice(0, -1),
  description: faker.lorem.sentence({ min: 2, max: 4 }).slice(0, -1),
  questions,
}

const json = JSON.stringify(data)
fs.writeFile('data.json', json, 'utf8', () => {
  console.log('JSON file generated.')
})

