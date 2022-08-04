import { StatusCodes } from 'http-status-codes'
import boggleGameImpl from '../algos/boggleGame.js'
import { problemsMap } from "../utils/problemsMap.js"

const algo = (req, res) => {
  res.status(StatusCodes.OK).json({
    result: problemsMap[req.name](...Object.values(req.body))
  })
}

// Do not edit the line below.
export { algo }
