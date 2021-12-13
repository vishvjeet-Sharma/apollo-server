import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
    CreateTrainee: ( parent, args ) => {
        const { user } = args;
        const addUser = userInstance.createUser(user)
        pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addUser });
        return addUser;
        // return userInstance.createUser(user);
    },
    UpdateTrainee: ( parent, args ) => {
        const { id, role } = args;
        const updatedUser = userInstance.updateUser(id, role)
        pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { taineeUpdate: updatedUser });
        return updatedUser;
        // return userInstance.updateUser(id, role);
    },
    DeleteTrainee: ( parent, args ) => {
        const { id } = args;
        const deletedId = userInstance.deleteUser(id)
        pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedId});
        return deletedId;
        // return userInstance.deleteUser(id);
    },
};