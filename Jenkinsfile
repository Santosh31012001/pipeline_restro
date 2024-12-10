pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Santosh31012001/pipeline_restro.git'
            }
        }
        stage('Set Node.js Version') {
            steps {
                sh '''
                # Ensure Node.js 18 is used
                export PATH="/path/to/nodejs18/bin:$PATH"
                node -v
                '''
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
