import { Router } from 'express';
import resumeController from '../controller/resumeController.js';

const resumeRouter = new Router();

resumeRouter.post('/create', resumeController.createResume);
resumeRouter.delete('/delete/:id', resumeController.deleteResumeById);
resumeRouter.get('/get', resumeController.getAllResumes);
resumeRouter.get('/get/:id', resumeController.getResumeById);
resumeRouter.get('/user/get/:id', resumeController.getResumesByUserId);
resumeRouter.put('/update', resumeController.updateResume);
resumeRouter.get('/pagination', resumeController.getFewResumes);

export default resumeRouter;
