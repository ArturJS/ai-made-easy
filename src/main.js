const instagram = require('./instagram');

const config = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
};

const main = async () => {
    await instagram.initialize();
    await instagram.login(config.username, config.password);
};

main();
