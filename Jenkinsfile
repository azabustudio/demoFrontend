#!groovy

def err_msg = ""
def repo_name = "demoFrontend"
def git_url = "git@github.com:azabustudio/${repo_name}.git"
def dev_branch = "dev"
def release_branch = "master"

node {
    agent any
    triggers {
        cron('H/1 * * * *')
    }
    try {
        // ソースの取得
        stage("get resource") {
            // カレントディレクトにgitリポジトリが存在するか否かの確認
            if(fileExists("./${repo_name}") && fileExists("./${repo_name}/.git")) {
                // フェッチ
                def FETCH_RESULT = sh(script: "cd ./${repo_name} && git fetch --all", returnStatus: true) == 0
                if(!FETCH_RESULT) {
                    // throw error
                    error "fetchに失敗しました"
                }
                // gitがある場合はpull
                def PULL_RESULT = sh(script: "cd ./${repo_name} && git pull --all", returnStatus: true) == 0
                if(!PULL_RESULT) {
                    error "pullに失敗しました"
                }
                // ブランチの切替
                def CHECKOUT_RESULT = sh(script: "cd ./${repo_name} && git checkout ${release_branch}", returnStatus: true) == 0
                if(!CHECKOUT_RESULT) {
                    // throw error
                    error "checkoutに失敗しました"
                }
            } else {
                // gitがない場合はclone
                def CLONE_RESULT = sh(script: "git clone ${git_url} ${repo_name}", returnStatus: true) == 0
                if(!CLONE_RESULT) {
                    error "cloneに失敗しました"
                }
            }
        }

        // push source code to IONIC PRO
        stage("push to Ionic") {
            withEnv(["PATH+NODE=${JENKINS_HOME}/.nvm/versions/node/v6.9.5/bin/"]) {
                sh(script:"cd ./${repo_name}", returnStatus:true)
                sh(script:"pwd && ls")
                def PUSH_TO_IONIC = sh(script: "cd ${repo_name} && git push ionic master", returnStatus: true) == 0
                if(!PUSH_TO_IONIC) {
                    error "Ionic へのpushが失敗しました。"
                }
                notification(PUSH_TO_IONIC)
            }
        }
    }catch(e){
        echo "${e}"
    }
}

// 実行結果のSlack通知
def notification(msg) {
    def slack_channel `= "#jenkins"  // jenkinsが通知するチャネル
    def slack_domain = "azabustudio"           // slackのドメイン名 https://mydomain.slack.comのmydomainの部分
    def slack_token = ""            // slackのjenkinsプラグインで取得できるtoken
    def slack_color = "good"
    def slack_icon = ""
    def detail_link = "(<${env.BUILD_URL}|Open>)"  // SlackでOpenのアンカーとして表示されます
    // ビルドエラー時にメッセージの装飾を行う
    if(currentBuild.result == "FAILURE") {
        slack_color = "danger"
    }
    def slack_msg = "job ${env.JOB_NAME}[No.${env.BUILD_NUMBER}] was builded ${currentBuild.result}. ${detail_link} \n\n ${msg}"
    slackSend channel: "${slack_channel}", color: "${slack_color}", message: "${slack_msg}", teamDomain: "${slack_domain}", token: "${slack_token}"
}