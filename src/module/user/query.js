export default {
    getMyProfile: async (parent, args, context) => {
        const { dataSources: { userAPI } } = context;
        const response = await userAPI.getMe();
        return response.data;
    }
};
    // getMyProfile: () => ({
    //     id: 1,
    //     name: 'Vishvjeet Sharma',
    //     email: 'Vishvjeet@gmail.com',
    // }),
// };