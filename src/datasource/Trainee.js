import { RESTDataSource } from "apollo-datasource-rest";
import { Config } from "../config/configurations";
export class TraineeAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `${Config.serviceUR}/api/trainee`;
    }
    async getTrainee(limit, skip) {
        return this.get('/', {limit, skip });
    }
    async CreateTrainee(payload) {
        return this.post('/', payload);
    }
    async UpdateTrainee(payload) {
        return this.put('/', payload);
    }
    async DeleteTraainee(id) {
        return this.delete(`/${id}`);
    }
}