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
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: 'b603a837-e0b8-4fc3-a2a6-e23a3f03defd') {
                    sh '''
                    echo "Using Node.js version:"
                    node -v
                    '''
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: 'b603a837-e0b8-4fc3-a2a6-e23a3f03defd') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: 'b603a837-e0b8-4fc3-a2a6-e23a3f03defd') {
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: 'b603a837-e0b8-4fc3-a2a6-e23a3f03defd') {
                    sh 'npm run test'
                }
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
