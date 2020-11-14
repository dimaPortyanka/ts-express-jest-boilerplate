import {
    Request,
    Response,
    Router,
} from 'express'

const router = Router()

/**
 * @swagger
 *
 * /examp-route:
 *   get:
 *     description: Greet world
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: hello world
 */
router.get(
    '/',
    (req: Request, res: Response): void => {
        res.json({
            'hello': 'world'
        })
    },
)

export default router
