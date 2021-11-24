import userInstance from '../../service/user';

export default {
    CreateTrainee: ( parent, args ) => {
        const { user } = args;
        return userInstance.createUser(user);
    },
    UpdateTrainee: ( parent, args ) => {
        const { id, role } = args;
        return userInstance.updateUser(id, role);
    },
    DeleteTrainee: ( parent, args ) => {
        const { id } = args;
        return userInstance.deleteUser(id);
    },
};