import { Router } from 'express';
import vacancyController from '../controller/vacancyController.js';

const vacancyRouter = new Router();

vacancyRouter.post('/create', vacancyController.createVacancy);
vacancyRouter.delete('/delete/:id', vacancyController.deleteVacancyById);
vacancyRouter.get('/get', vacancyController.getAllVacancies);
vacancyRouter.get('/get/:id', vacancyController.getVacancyById);
vacancyRouter.get('/user/get/:id', vacancyController.getVacanciesByUserId);
vacancyRouter.put('/update', vacancyController.updateVacancy);
vacancyRouter.get('/pagination', vacancyController.getFewVacancies);
export default vacancyRouter;
