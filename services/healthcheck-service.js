const HealthCheckService = {
  async status() {
    return Promise.resolve({ status: 'ok' })
  }
}

module.exports = HealthCheckService
