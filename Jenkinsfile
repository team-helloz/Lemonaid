# 도커 파이프라인
pipeline {
	agent none
	options { skipDefaultCheckout(false) }
	stages {
		stage('git pull') { # pull 받아오는 상태
			agent any
			steps {
				checkout scm
			}
		}
		stage('Docker build') { # docker build 상태
			agent any
			steps {
				sh 'docker build -t frontend:latest /var/jenkins_home/workspace/jenkins-cicd/frontend' 
				# frontend -t 는 생성할 이미지 이름. 
				sh 'docker build -t backend:latest /var/jenkins_home/workspace/jenkins-cicd/backend' 
				# backend 도커가 있는 위치. 빌드는 도커 이미지 파일을 만들어 주는 것입니다!! 아직 실행 X 

			}
		}
		stage('Docker run') {# docker 배포 상태
			agent any
			steps {
				# 도커 시작 전, 기존에 실행중인 도커를 멈추고 제거하는 작업.
				sh 'docker ps -f name=frontend -q \
        | xargs --no-run-if-empty docker container stop'
				sh 'docker ps -f name=backend -q \
		| xargs --no-run-if-empty docker container stop'

				# 컨테이너 제거
				sh 'docker container ls -a -f name=frontend -q \
        | xargs -r docker container rm'
				sh 'docker container ls -a -f name=backend -q \
		| xargs -r docker container rm'

				# 도커 이미지 제거-> 도커 이미지 중 none tag의 id를 구해서 강제로 삭제하는 명령어 
				sh 'docker images -f dangling=true && \ 		# -f 강제, dangling=true, Docker 에서 none tag 삭제
				docker rmi $(docker images -f dangling=true -q)' 	# 이미지 해시 제거, 이미지 제거. 사용되지 않은 모든 이미지 제거?  -q 옵션 이미지 ID

				# -v 호스트 경로:컨테이너경로 연결
				# 도커 실행 
				# frontend 이름으로,  jenkinsnetwork에서 frontend:latest를, 포트는 포트(nginx)
				sh 'docker run -d --name frontend \
				-p 80:80 \
				-p 443:443 \
				-v /home/ubuntu/sslkey/:/var/jenkins_home/workspace/jenkins-cicd/sslkey/ \
				-v /etc/localtime:/etc/localtime:ro \
				--network jenkinsnetwork \
				frontend:latest'

				sh 'docker run -d --name backend \
		--network jenkinsnetwork backend:latest'
			}
		}
	}
}