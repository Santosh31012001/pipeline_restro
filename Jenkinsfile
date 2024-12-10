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
                    if command -v nvm > /dev/null; then
                        echo "Using NVM to set Node.js version"
                        . ~/.nvm/nvm.sh && nvm install 18 && nvm use 18
                    else
                        echo "NVM not found. Ensure Node.js 18 is installed globally"
                    fi
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
                // Add your deployment steps here
            }
        }
    }
}
