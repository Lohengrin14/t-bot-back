import resumeModel from '../models/resume-model.js';
import vacancyModel from '../models/vacancy-model.js';

class ResumeService {
  async createResume(resume) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const creationDate = new Date().toLocaleDateString('ru-RU', options);
    const resumeData = resumeModel.create({ ...resume, date: creationDate });
    return resumeData;
  }

  async deleteResumeById(id) {
    const resume = await resumeModel.findByIdAndDelete(id);
    if (!resume) {
      throw ApiError.BadRequest(`Резюме не найдено!`);
    }

    return resume;
  }

  async getAllResumes() {
    const resumes = await resumeModel.find();
    if (!resumes) {
      throw ApiError.BadRequest(`Резюме не найдено!`);
    }

    return resumes;
  }

  async getResumeById(id) {
    const resume = await resumeModel.findById(id);
    if (!resume) {
      throw ApiError.BadRequest(`Резюме не найдено!`);
    }

    return resume;
  }

  async getResumesByUserId(id) {
    const resume = await resumeModel.find({ user_id: id });
    if (!resume) {
      throw ApiError.BadRequest(`Резюме не найдено!`);
    }

    return resume;
  }

  async updateResume(resume) {
    await resumeModel.findOneAndUpdate({ _id: resume._id }, { ...resume });
    const updatedResume = resumeModel.findOne({ _id: resume._id });
    return updatedResume;
  }

  async getFewResumes(limit, page) {
    const resumes = await resumeModel.find().skip(page).limit(limit);
    return resumes;
  }
}
export default new ResumeService();
