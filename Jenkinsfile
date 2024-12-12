pipeline {
    agent any

    tools {
        nodejs "node-18"  // Use the name you assigned in Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Santosh31012001/pipeline_restro.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies
                    sh 'sudo npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Next.js project
                    sh 'sudo npm run build'
                }
            }
        }
    }

    post {
        always {
            // Clean up the workspace after the build
            cleanWs()
        }
    }
}
