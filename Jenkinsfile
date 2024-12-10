pipeline {
    agent any
    environment {
        // Specify Node.js version to use if NVM is available
        NODE_VERSION = '18'
    }
    stages {
        stage('Checkout') {
            steps {
                // Clone the Git repository
                git branch: 'main', url: 'https://github.com/Santosh31012001/pipeline_restro.git'
            }
        }
        stage('Check Node.js Version') {
            steps {
                // Check the current Node.js version
                sh 'node -v || echo "Node.js not installed"'
            }
        }
        stage('Set Node.js Version') {
            steps {
                // Use NVM to set Node.js version or ensure the correct version is installed
                sh '''
                    if command -v nvm > /dev/null; then
                        echo "Using NVM to set Node.js version"
                        . ~/.nvm/nvm.sh && nvm install ${NODE_VERSION} && nvm use ${NODE_VERSION}
                    else
                        echo "NVM not found. Ensure Node.js ${NODE_VERSION} is installed"
                    fi
                    node -v
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the application
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                // Add deployment logic here
                echo 'Deploying application...'
            }
        }
    }
}
