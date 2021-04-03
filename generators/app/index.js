const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // async prompting() {
  //   this.answers = await this.prompt([
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "Project name"
  //     }
  //   ])

  //   this.log("App name", this.answers.name)
  // }

  writing () {
    // API
    this.fs.copy(this.templatePath('apps/api'), this.destinationPath('apps/api'), {
      globOptions: {
        dot: true,
        ignore: [
          '**/log',
          '**/tmp/cache',
          '**/tmp/sockets',
          '**/tmp/storage',
        ]
      }
    })
    this.fs.copy(this.templatePath('apps/api/.env.example'), this.destinationPath('apps/api/.env'), {})

    // DB
    this.fs.copy(this.templatePath('apps/db/.env.example'), this.destinationPath('apps/db/.env.example'), {})
    this.fs.copy(this.templatePath('apps/db/.env.example'), this.destinationPath('apps/db/.env'), {})

    // WWW
    this.fs.copy(this.templatePath('apps/www'), this.destinationPath('apps/www'), {})
    this.fs.copy(this.templatePath('apps/www/.env.example'), this.destinationPath('apps/www/.env'), {})

    // Kubernetes config
    this.fs.copy(this.templatePath('kubernetes'), this.destinationPath('kubernetes'), {})

    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'), {})
    this.fs.copy(this.templatePath('docker-compose.yml'), this.destinationPath('docker-compose.yml'), {})
    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'), {})
    this.fs.copy(this.templatePath('devspace.yaml'), this.destinationPath('devspace.yaml'), {})
    this.fs.copy(this.templatePath('Makefile'), this.destinationPath('Makefile'), {})
    this.fs.copy(this.templatePath('vetur.config.js'), this.destinationPath('vetur.config.js'), {})
  }
}
