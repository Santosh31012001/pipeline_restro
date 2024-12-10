pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the Git repository
                git branch: 'main', url: 'https://github.com/Santosh31012001/pipeline_restro.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here
            }
        }
    }
}
