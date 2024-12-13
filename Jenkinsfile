pipeline {
    agent any
    tools {
        nodejs 'node-18'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Santosh31012001/pipeline_restro.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Build') {
        //     steps{
        //         sh'npm run build'
        //     }
        // }

    }
}
