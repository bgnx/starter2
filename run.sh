docker rm -f project-container || true && \
docker build \
 -f docker/Dockerfile \
 -t project-image docker && \
docker run --name project-container -d \
 -v $(pwd):/project \
 -w /project \
 -p 4000:4000 \
 project-image node docker/run.js && \
docker logs -f project-container