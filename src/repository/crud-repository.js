class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try {
             await this.model.destroy({
                where:{id}
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findByPk(id);
            return result ;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result ;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(modelId, data){
        try {
            const entity = await this.model.findByPk(modelId);
            await entity.update(data);
            return entity;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;