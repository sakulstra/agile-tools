const { Application } = require('probot')
const myProbotApp = require('..')

describe('AgileTools', () => {
  let app, github

  beforeEach(() => {
    app = new Application()
    app.load(myProbotApp)
    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(Promise.resolve({}))
      }
    }
    app.auth = () => Promise.resolve(github)
  })

  // test('attaches the voting buttons when an issue is opened', async () => {
  //   await app.receive({
  //     event: 'issues.opened',
  //     // payload: issuesOpenedPayload
  //   })
  // })
})
