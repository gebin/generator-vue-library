var Generator = require("yeoman-generator");
// const baseRootPath = './generators/app/templates';
const fs = require("fs");
const path = require("path");

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    // Use our plain template as source
    // this.sourceRoot(baseRootPath);
    // this.sourceRoot();
    // this.config.save();
    // console.log(this.sourceRoot());
    // console.log(this.destinationRoot());
  }
  initializing() {}
  prompting() {}
  configuring() {}
  default() {}
  writing() {
    const excludeList = [
      "LICENSE",
      "README.md",
      "CHANGELOG.md",
      "node_modules",
    //   "package.json",
      ".istanbul.yml",
      ".travis.yml"
    ];

    const baseRootPath = this.sourceRoot();
    
    function readdir(me,currentPath){
        // Get all files in our repo and copy the ones we should
        fs.readdir(currentPath, (err, items) => {
            for (let item of items) {
                // Skip the item if it is in our exclude list
                if (excludeList.indexOf(item) !== -1) {
                    continue;
                }
        
                // Copy all items to our root
                let fullPath = path.join(currentPath, item);
                if (fs.lstatSync(fullPath).isDirectory()) {
                    // console.log(fullPath)
                    readdir(me,fullPath);
                } else {
                    if (item === ".npmignore") {
                        me.fs.copy((fullPath), ".gitignore");
                    } else {
                        let relativePath = path.relative(baseRootPath,currentPath);
                        // console.log(relativePath)
                        me.fs.copy((fullPath), me.destinationPath(path.join(relativePath,item)));
                    }
                }
            }
        });
    }

    readdir(this,this.sourceRoot())
  }
  conflicts() {}
  install() {}
  end() {}
};
