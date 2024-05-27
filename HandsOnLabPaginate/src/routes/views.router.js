import { Router } from 'express';
import studentsModel from '../models/students.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {})
})
router.get('/students', async (req, res) => {
    let page = parseInt(req.query.page);
    if (!page) page = 1;
    let result = await studentsModel.paginate({}, { page, limit: 5, lean: true })
    result.prevLink = result.hasPrevPage ? `http://localhost:8080/students?page=${result.prevPage}` : '';
    result.nextLink = result.hasNextPage ? `http://localhost:8080/students?page=${result.nextPage}` : '';
    result.isValid = !(page <= 0 || page > result.totalPages)
    res.render('students', result)
})


export default router;