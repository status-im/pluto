node('linux') {
  stage('Git Prep') {
    checkout scm
    sh 'git config user.name "status-im-auto"'
    sh 'git config user.email "auto@status.im"'
  }

  stage('Install Deps') {
    sh 'cd website && npm install'
  }

  stage('Publish') {
    withCredentials([string(
      credentialsId: 'jenkins-github-token',
      variable: 'GITHUB_TOKEN',
    )]) {
      sh 'clojure -A:examples -m cljs.main -O advanced -d website/static/js -o website/static/js/pluto.js -c pluto.examples'
      sh 'cp -R examples/resources/extensions website/static'
      sh 'cd website && GIT_USER="status-im-auto:$GITHUB_TOKEN" npm run publish-gh-pages'
    }
  }
}
