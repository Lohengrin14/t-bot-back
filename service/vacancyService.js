import vacancyModel from '../models/vacancy-model.js';

class vacancyService {
  async createVacancy(vacancy) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const creationDate = new Date().toLocaleDateString('ru-RU', options);
    const vacancyData = vacancyModel.create({ ...vacancy, date: creationDate });
    return vacancyData;
  }

  async deleteVacancyById(id) {
    const vacancies = await vacancyModel.findByIdAndDelete(id);
    if (!vacancies) {
      throw ApiError.BadRequest(`Вакансия не найден!`);
    }

    return vacancies;
  }

  async getAllVacancies() {
    const vacancy = await vacancyModel.find();
    if (!vacancy) {
      throw ApiError.BadRequest(`Вакансии не найден!`);
    }

    return vacancy;
  }

  async getVacancyById(id) {
    const vacancy = await vacancyModel.findById(id);
    if (!vacancy) {
      throw ApiError.BadRequest(`Вакансии не найден!`);
    }

    return vacancy;
  }

  async getVacanciesByUserId(id) {
    const vacancy = await vacancyModel.find({ user_id: id });
    if (!vacancy) {
      throw ApiError.BadRequest(`Вакансии не найден!`);
    }

    return vacancy;
  }

  async updateVacancy(vacancy) {
    await vacancyModel.findOneAndUpdate({ _id: vacancy._id }, { ...vacancy });
    const updatedVacancy = vacancyModel.findOne({ _id: vacancy._id });
    return updatedVacancy;
  }

  async getFewVacancies(limit, page) {
    const vacancies = await vacancyModel.find().skip(page).limit(limit);
    return vacancies;
  }
}
export default new vacancyService();
