import { HttpResponse, http } from 'msw'
import { faker, simpleFaker } from '@faker-js/faker'

export const handlers = [
  http.get('/rules', () => {
    return HttpResponse.json({
      id: simpleFaker.string.uuid(),
      rules: Array.from({ length: 1000 }, () => ({
        id: simpleFaker.string.uuid(),
        code: `${faker.helpers.arrayElement([
          'html',
          'css',
          'javascript',
          'php',
          'python',
          'java',
          'ruby',
          'go',
          'swift',
          'kotlin',
        ])}:${faker.number.int({ min: 50000, max: 60000 })}`,
        description: faker.lorem.sentence({ min: 10, max: 15 }),
        type: faker.helpers.arrayElement([
          'BUG',
          'VULNERABILITY',
          'CODE_SMELL',
          'SECURITY_HOTSPOT',
        ]),
        severity: faker.helpers.arrayElement([
          'INFO',
          'MINOR',
          'MAJOR',
          'CRITICAL',
          'BLOCKER',
        ]),
        state: faker.helpers.arrayElement(['ACTIVE', 'DESACTIVE']),
        date: faker.date.anytime(),
      })),
    })
  }),
]
