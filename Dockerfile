FROM python:3.12.0-alpine

EXPOSE 8000

RUN mkdir /www

COPY index.html /www
COPY styles.css /www

WORKDIR /www

# Turn daemon off so we can see the logs
CMD ["python", "-m", "http.server"]
