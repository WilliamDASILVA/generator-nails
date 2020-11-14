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

    // DB
    this.fs.copy(this.templatePath('apps/db/.env.example'), this.destinationPath('apps/db/.env.example'), {})

    // WWW
    this.fs.copy(this.templatePath('apps/www'), this.destinationPath('apps/www'), {})

    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'), {})
    this.fs.copy(this.templatePath('docker-compose.yml'), this.destinationPath('docker-compose.yml'), {})
    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'), {})
  }
}
