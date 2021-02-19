const { app } = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', async done => {
    const myData = [
        {
            'id': 1,
            'name': 'Tom_Brady',
            'accuracy': 94,
        },
        {
            'id': 2,
            'name': 'Aaron_Rodgers',
            'accuracy': 98,
        },
        {
            'id': 3,
            'name': 'Patrick_Mahomes',
            'accuracy': 97,
        },
        {
            'id': 4,
            'name': 'Russel_Wilson',
            'accuracy': 96,
        },
        {
            'id': 5,
            'name': 'Josh_Allen',
            'accuracy': 91,
        },
        {
            'id': 5,
            'name': 'Drew_Brees',
            'accuracy': 93,
        },
    ]
    const response = await request.get('/quarterbacks')
    console.log(response)
    expect(response.status).toBe(200)
    expect(response.body.quarterbacks).toEqual(myData)
    done()
  })