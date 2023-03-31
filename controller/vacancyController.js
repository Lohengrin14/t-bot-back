import vacancyService from '../service/vacancyService.js';

class VacancyController {
  async createVacancy(req, res, next) {
    try {
      const vacancy = req.body;
      const vacancyData = await vacancyService.createVacancy(vacancy);
      return res.json(vacancyData);
    } catch (error) {
      next(error);
    }
  }

  async deleteVacancyById(req, res, next) {
    try {
      const id = req.params.id;
      const vacancy = await vacancyService.deleteVacancyById(id);
      return res.json(`Вакансия ${vacancy.vacancy_name} удалена`);
    } catch (error) {
      next(error);
    }
  }

  async getAllVacancies(req, res, next) {
    try {
      const vacancies = await vacancyService.getAllVacancies();
      return res.json(vacancies);
    } catch (error) {
      next(error);
    }
  }

  async getVacancyById(req, res, next) {
    try {
      const id = req.params.id;
      const vacancy = await vacancyService.getVacancyById(id);
      return res.json(vacancy);
    } catch (error) {
      next(error);
    }
  }

  async getVacanciesByUserId(req, res, next) {
    try {
      const id = req.params.id;
      const vacancies = await vacancyService.getVacanciesByUserId(id);
      return res.json(vacancies);
    } catch (error) {
      next(error);
    }
  }

  async updateVacancy(req, res, next) {
    try {
      const vacancy = req.body;
      const updatedVacancy = await vacancyService.updateVacancy(vacancy);
      return res.json(updatedVacancy);
    } catch (error) {
      next(error);
    }
  }

  async getFewVacancies(req, res, next) {
    try {
      const { limit, page } = req.query;
      const vacancies = await vacancyService.getFewVacancies(limit, page);
      return res.json(vacancies);
    } catch (error) {
      next(error);
    }
  }
}
export default new VacancyController();
