const model = (sequelize, Sequelize) => {
    const Code = sequelize.define("code", {
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        language: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sourceCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        input: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Code;
};
export default model;
//# sourceMappingURL=code.model.js.map