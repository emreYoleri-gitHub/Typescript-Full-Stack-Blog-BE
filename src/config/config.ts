const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: false,
            autoIndex: false,
            retryWrites: false
        },
        url: `mongodb+srv://emreyoleriDB:1052emre@cluster0.lzsew.mongodb.net/blogDB`
    },
    server: {
        host: 'localhost',
        port: 5000
    }
};

export default config;
