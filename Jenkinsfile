pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Santosh31012001/pipeline_restro.git'
            }
        }
        stage('Check Node.js Version') {
            steps {
                sh '''
                # Explicitly set the correct Node.js binary path
                export PATH=/usr/local/bin:/usr/bin:$PATH
                echo "Using Node.js version:"
                node -v
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                # Use the correct Node.js binary path during npm install
                export PATH=/usr/local/bin:/usr/bin:$PATH
                npm install
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                export PATH=/usr/local/bin:/usr/bin:$PATH
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                export PATH=/usr/local/bin:/usr/bin:$PATH
                npm run test
                '''
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
