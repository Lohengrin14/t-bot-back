import resumeService from '../service/resumeService.js';

class ResumeController {
  async createResume(req, res, next) {
    try {
      const resume = req.body;
      const resumeData = await resumeService.createResume(resume);
      return res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }

  async deleteResumeById(req, res, next) {
    try {
      const id = req.params.id;
      const resume = await resumeService.deleteResumeById(id);
      return res.json(`Резюме ${resume.resume_name} удалено`);
    } catch (error) {
      next(error);
    }
  }

  async getAllResumes(req, res, next) {
    try {
      const resumes = await resumeService.getAllResumes();
      return res.json(resumes);
    } catch (error) {
      next(error);
    }
  }

  async getResumeById(req, res, next) {
    try {
      const id = req.params.id;
      const resume = await resumeService.getResumeById(id);
      return res.json(resume);
    } catch (error) {
      next(error);
    }
  }

  async getResumesByUserId(req, res, next) {
    try {
      const id = req.params.id;
      const resumes = await resumeService.getResumesByUserId(id);
      return res.json(resumes);
    } catch (error) {
      next(error);
    }
  }

  async updateResume(req, res, next) {
    try {
      const resume = req.body;
      const updatedResume = await resumeService.updateResume(resume);
      return res.json(updatedResume);
    } catch (error) {
      next(error);
    }
  }

  async getFewResumes(req, res, next) {
    try {
      const { limit, page } = req.query;
      const resumes = await resumeService.getFewResumes(limit, page);
      return res.json(resumes);
    } catch (error) {
      next(error);
    }
  }
}
export default new ResumeController();
