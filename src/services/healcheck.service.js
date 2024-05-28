class HealthCheckService {
    static get = () => {
        return { health: "check" };
    };
    static post = () => {
        return { health: "check" };
    };
}

module.exports = HealthCheckService;
